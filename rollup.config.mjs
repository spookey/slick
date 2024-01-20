import copier from 'rollup-plugin-copier';
import cssdiscard from 'postcss-discard-comments';
import cssimport from 'postcss-import';
import cssprefixer from 'autoprefixer';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { fileURLToPath } from 'url';


const DEVELOP = [
  'dev', 'devel', 'development'
].includes(process.env.BUILD);

const F_NAME = fileURLToPath(import.meta.url);
const D_NAME = path.dirname(F_NAME);

const NODE_M = path.normalize(path.join(
  D_NAME, 'node_modules',
));
const SOURCES = path.normalize(path.join(
  D_NAME, '_assets',
));
const ASSETS = path.normalize(path.join(
  D_NAME, 'assets',
));
const STATIC = path.normalize(path.join(
  D_NAME, 'static',
));

const assetStyle = {
  input: path.join(SOURCES, '_style.css'),
  output: {
    file: path.join(ASSETS, 'style.css'),
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
        cssurl({
          url: 'copy',
          assetsPath: path.join(STATIC, 'assets', 'fonts'),
          useHash: true,
        }),
        cssurl({
          url: (asset) => path.relative(
            STATIC, path.join(NODE_M, asset.url)
          ),
        }),
        cssprefixer(),
        cssdiscard({
          removeAll: true,
        }),
      ],
      extract: true,
      minimize: !DEVELOP,
      sourceMap: (DEVELOP ? 'inline' : false),
    }),
    copier({
      items: [{
        src: path.join(NODE_M, 'purecss', 'LICENSE'),
        dest: path.join(STATIC, 'assets', 'license-purecss'),
      }, {
        src: path.join(NODE_M, 'source-code-pro', 'LICENSE.md'),
        dest: path.join(STATIC, 'assets', 'license-source-code-pro.md'),
      }, {
        src: path.join(NODE_M, 'source-sans', 'LICENSE.md'),
        dest: path.join(STATIC, 'assets', 'license-source-sans-pro.md'),
      }, {
        src: path.join(NODE_M, 'source-serif', 'LICENSE.md'),
        dest: path.join(STATIC, 'assets', 'license-source-serif-pro.md'),
      }],
    }),
  ],
};


const assetScript = {
  input: path.join(SOURCES, '_script.ts'),
  output: {
    file: path.join(ASSETS, 'script.js'),
    format: 'iife',
    sourcemap: DEVELOP,
  },
  plugins: [
    typescript({
      sourceMap: DEVELOP,
    }),
    (DEVELOP ? null : terser()),
  ],
};


export default [
  assetStyle,
  assetScript,
];
