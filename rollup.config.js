import cssimport from 'postcss-import';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';


const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


export default [{
  input: '_assets/_fonts.css',
  output: {
    file: 'static/assets/fonts.css',
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
      ],
      extract: 'static/assets/fonts.css',
      minimize: (devel() ? false : {
        discardUnused: false,
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}, {
  input: '_assets/_style.css',
  output: {
    file: 'static/assets/style.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
      ],
      extract: 'static/assets/style.css',
      minimize: (devel() ? false : {
          discardComments: { removeAll: true },
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}, {
  input: '_assets/_style-compat.css',
  output: {
    file: 'static/assets/style-compat.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
      ],
      extract: 'static/assets/style-compat.css',
      minimize: (devel() ? false : {
          discardComments: { removeAll: true },
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}];
