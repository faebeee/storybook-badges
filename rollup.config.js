import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'rollup-plugin-jsx'

export default {
    output: {
        file: './lib/register.js',
        format: 'cjs'
    },
    input: 'src/register.jsx',
    external: ['react'],
    plugins: [
        commonjs(),
        babel({ babelHelpers: 'runtime' }),
        jsx({ factory: 'React.createElement' }),
    ]

};
