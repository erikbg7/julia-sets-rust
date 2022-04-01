const helloWorld = import('./rust/pkg')
  .catch((e) => console.error('Failed loading WASM module:', e))
  .then((rust) => {
    return !!rust && rust.hello_world;
  });

export { helloWorld };
