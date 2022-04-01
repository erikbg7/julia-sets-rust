use std::ops::Add;
use wasm_bindgen::prelude::*;
use web_sys::console;
use num::complex::Complex;


fn evaluate(z: Complex<f32>, power: u32, c: Complex<f32>, iteration: u8) -> u8 {

    if z.norm() > 2.0 || iteration == 255 {
        return iteration;
    }

    let zpow: Complex<f32> = z.powu(power);
    let znew: Complex<f32> = zpow.add(c);

    return evaluate(znew, power, c, iteration + 1);
}

fn normalize_range(index: u32, range: u32) -> f32 {
    return -1.2 + (2 * index) as f32 *1.2/range as f32;
}

#[wasm_bindgen]
pub fn hello_world(w: u32, h: u32, power: u32, c_re: f32, c_im: f32, output: &mut [u8]) {
    let mut off = 0;
    for y in 0..h {
        for x in 0..w {
            let re: f32 = normalize_range(x, w);
            let im: f32 = normalize_range(y, h);

            let z = Complex::new(re, im);
            let c = Complex::new(c_re, c_im);

            let iteration = evaluate(z, power, c, 0);
            output[off] = iteration;
            off += 1;
        }
    }
}