import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      { file: pkg.browser, name: pkg.name, format: 'umd' }
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
  }
];
