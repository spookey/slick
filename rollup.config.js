//common
import path from 'path';

//rollup
import postcss from 'rollup-plugin-postcss';

//postcss
import cssimport from 'postcss-import';
import cssurl from 'postcss-url';


//helpers
const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


//build
export default [{
  input: 'source/static/fonts.css',
  output: {
    file: 'dist/static/fonts.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
        cssurl({
          url: 'copy',
          assetsPath: 'dist/static/fonts',
          useHash: true,
        }),
        cssurl({
          url: (asset) => path.relative('dist/static', asset.url),
        }),
      ],
      extract: 'dist/static/fonts.css',
      minimize: (devel() ? false : {
        discardUnused: false,
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}, {
  input: 'source/static/style.css',
  output: {
    file: 'dist/static/style.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
      ],
      extract: 'dist/static/style.css',
      minimize: (devel() ? false : {
          discardComments: { removeAll: true },
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}];
