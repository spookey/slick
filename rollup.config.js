import copy from 'rollup-plugin-copy';
import cssimport from 'postcss-import';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';


const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


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
    copy({
      'LICENSE': 'dist/LICENSE',
      'source/archetypes': 'dist/archetypes',
      'source/layouts': 'dist/layouts',
      'source/theme.toml': 'dist/theme.toml',
    }),
  ],
}];
