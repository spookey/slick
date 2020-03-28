import copier from 'rollup-plugin-copier';
import cssdiscard from 'postcss-discard-comments';
import cssimport from 'postcss-import';
import cssprefixer from 'autoprefixer';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';


const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


const assetStyle = () => {
  return {
    input: '_assets/_style.css',
    output: {
      file: 'assets/style.css',
      format: 'system',
    },
    plugins: [
      postcss({
        plugins: [
          cssimport(),
          cssurl({
            url: 'copy',
            assetsPath: 'static/assets/fonts',
            useHash: true,
          }),
          cssurl({
            url: (asset) => path.relative('static', asset.url),
          }),
          cssprefixer(),
          cssdiscard({
            removeAll: true,
          }),
        ],
        extract: true,
        minimize: !devel(),
        sourceMap: (devel() ? 'inline' : false),
      }),
      copier({
        items: [{
          src: 'node_modules/purecss/LICENSE',
          dest: 'static/assets/license-purecss',
        }, {
          src: 'node_modules/source-code-pro/LICENSE.md',
          dest: 'static/assets/license-source-code-pro.md',
        }, {
          src: 'node_modules/source-sans-pro/LICENSE.md',
          dest: 'static/assets/license-source-sans-pro.md',
        }, {
          src: 'node_modules/source-serif-pro/LICENSE.md',
          dest: 'static/assets/license-source-serif-pro.md',
        }],
      }),
    ],
  };
};


const assetScript = () => {
  return {
    input: '_assets/_script.ts',
    output: {
      file: 'assets/script.js',
      format: 'iife',
    },
    plugins: [
      typescript(),
      (devel() ? null : terser()),
    ],
  };
};


export default [
  assetStyle(),
  assetScript(),
];
