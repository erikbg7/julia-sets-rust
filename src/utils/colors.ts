function hslToRgb(h: number, s: number, l: number) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/*
 * Convert hue-saturation-value/luminosity to RGB.
 *
 * Input ranges:
 *   H =   [0, 360] (integer degrees)
 *   S = [0.0, 1.0] (float)
 *   V = [0.0, 1.0] (float)
 */
function hsvToRGB(h: number, s: number, v: number) {
  if (v > 1.0) v = 1.0;
  const hp = h / 60.0;
  const c = v * s;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let rgb = [0, 0, 0];

  if (0 <= hp && hp < 1) rgb = [c, x, 0];
  if (1 <= hp && hp < 2) rgb = [x, c, 0];
  if (2 <= hp && hp < 3) rgb = [0, c, x];
  if (3 <= hp && hp < 4) rgb = [0, x, c];
  if (4 <= hp && hp < 5) rgb = [x, 0, c];
  if (5 <= hp && hp < 6) rgb = [c, 0, x];

  const m = v - c;
  rgb[0] += m;
  rgb[1] += m;
  rgb[2] += m;

  rgb[0] *= 255;
  rgb[1] *= 255;
  rgb[2] *= 255;
  return rgb;
}

export { hslToRgb, hsvToRGB };
