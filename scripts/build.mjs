import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,outfile:'dist/app.js',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},target:['es2020']});
await writeFile('dist/index.html','<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>IVE 學習島嶼 | DIVE into IVE</title><meta name="description" content="非官方繁體中文 IVE 互動學習島嶼"><link rel="stylesheet" href="./app.css"></head><body><div id="root"></div><script type="module" src="./app.js"></script></body></html>');
await writeFile('dist/.nojekyll','');
console.log('Built GitHub Pages site in dist/');
