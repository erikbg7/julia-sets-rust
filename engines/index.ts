const generateSetValues = import('./rust/pkg')
  .catch((e) => console.error('Failed loading WASM module:', e))
  .then((rust) => {
    return !!rust && rust.generate_set_values;
  });

export { generateSetValues };
