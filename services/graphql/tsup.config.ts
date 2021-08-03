export const tsup: import('tsup').Options = {
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  splitting: false,
  sourcemap: true,
}
