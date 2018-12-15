import copy from 'rollup-plugin-copy';
import cssimport from 'postcss-import';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';


const devel = () => [
    'dev', 'devel', 'development'
].includes(process.env.BUILD);


export default [{
  input: 'source/static/_fonts.css',
  output: {
    file: 'dist/static/assets/fonts.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
        cssurl({
          url: 'copy',
          assetsPath: 'dist/static/assets/fonts',
          useHash: true,
        }),
        cssurl({
          url: (asset) => path.relative('dist/static/assets', asset.url),
        }),
      ],
      extract: 'dist/static/assets/fonts.css',
      minimize: (devel() ? false : {
        discardUnused: false,
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
}, {
  input: 'source/static/_style.css',
  output: {
    file: 'dist/static/assets/style.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
      ],
      extract: 'dist/static/assets/style.css',
      minimize: (devel() ? false : {
          discardComments: { removeAll: true },
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}, {
  input: 'source/static/_style-compat.css',
  output: {
    file: 'dist/static/assets/style-compat.css',
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
      ],
      extract: 'dist/static/assets/style-compat.css',
      minimize: (devel() ? false : {
          discardComments: { removeAll: true },
      }),
      sourceMap: (devel() ? 'inline' : false),
    }),
  ],
}];
