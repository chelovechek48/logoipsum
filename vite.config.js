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
      '@components': setAlias('./src/components'),
      '@views': setAlias('./src/views'),
      '@styles': setAlias('./src/styles'),
      '@icons': setAlias('./src/assets/icons'),
      '@json': setAlias('./src/assets/json'),
    },
  },
});
