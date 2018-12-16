import cssdiscard from 'postcss-discard-comments';
import cssimport from 'postcss-import';
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
          cssdiscard({
            removeAll: true,
          }),
        ],
        extract: true,
        minimize: !devel(),
        sourceMap: (devel() ? 'inline' : false),
      }),
    ],
  };
};


export default [
  asset(false),
  asset(true),
];
