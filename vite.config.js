import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const repositoryName = '/logoipsum';
const setAlias = (localPath) => path.resolve(__dirname, localPath);

export default defineConfig({
  base: repositoryName,
  server: { port: '8080' },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': setAlias('./src'),
      '@js': setAlias('./src/js'),
      '@components': setAlias('./src/components'),
      '@views': setAlias('./src/views'),
      '@styles': setAlias('./src/styles'),
      '@icons': setAlias('./src/assets/icons'),
      '@images': setAlias('./src/assets/images'),
      '@json': setAlias('./src/assets/json'),
    },
  },
});
