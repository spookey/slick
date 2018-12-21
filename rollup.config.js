import copy from 'rollup-plugin-copy';
import cssadvvars from 'postcss-advanced-variables';
import cssdiscard from 'postcss-discard-comments';
import cssimport from 'postcss-import';
import cssprefixer from 'autoprefixer';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';


const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


const asset = (compat) => {
  return {
    input: (compat ? '_assets/_style-compat.css' : '_assets/_style.css'),
    output: {
      file: (compat ? 'static/assets/style-compat.css' : 'static/assets/style.css'),
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
            url: (asset) => path.relative('static/assets', asset.url),
          }),
          cssprefixer(),
          cssadvvars(),
          cssdiscard({
            removeAll: true,
          }),
        ],
        extract: true,
        minimize: !devel(),
        sourceMap: (devel() ? 'inline' : false),
      }),
      copy({
        'node_modules/purecss/LICENSE.md': 'static/assets/license-purecss.md',
        'node_modules/source-code-pro/LICENSE.txt': 'static/assets/license-source-code-pro.txt',
        'node_modules/source-sans-pro/LICENSE.txt': 'static/assets/license-source-sans-pro.txt',
        'node_modules/source-serif-pro/LICENSE.txt': 'static/assets/license-source-serif-pro.txt',
      }),
    ],
  };
};


export default [
  asset(false),
  asset(true),
];
