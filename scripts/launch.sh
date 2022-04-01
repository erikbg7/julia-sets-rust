#!/bin/sh

wasm-pack build
if [ $? -eq 0 ]; then
  npm run serve
fi