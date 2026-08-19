import { resolve } from 'node:path';

export default {
  base: './',
  build: {
    rollupOptions: {
      maxParallelFileOps: 128,
      input: {
        en: resolve(__dirname, 'index.html'),
        es: resolve(__dirname, 'es/index.html'),
        ptBr: resolve(__dirname, 'pt-br/index.html'),
        de: resolve(__dirname, 'de/index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        ar: resolve(__dirname, 'ar/index.html'),
        tr: resolve(__dirname, 'tr/index.html'),
        nl: resolve(__dirname, 'nl/index.html'),
      },
    },
  },
};
