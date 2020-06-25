import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/yiq.ts',
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    })
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]
};
