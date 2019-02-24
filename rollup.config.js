import copier from 'rollup-plugin-copier';
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
          src: 'node_modules/purecss/LICENSE.md',
          dest: 'static/assets/license-purecss.md',
        }, {
          src: 'node_modules/source-code-pro/LICENSE.txt',
          dest: 'static/assets/license-source-code-pro.txt',
        }, {
          src: 'node_modules/source-sans-pro/LICENSE.txt',
          dest: 'static/assets/license-source-sans-pro.txt',
        }, {
          src: 'node_modules/source-serif-pro/LICENSE.md',
          dest: 'static/assets/license-source-serif-pro.md',
        }],
      }),
    ],
  };
};


export default [
  asset(false),
  asset(true),
];
