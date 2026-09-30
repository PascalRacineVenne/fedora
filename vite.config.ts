import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';

export default defineConfig({
  plugins: [wyw({ include: ['**/*.{ts,tsx}'] }), react()],
  server: { port: 3000 },
  build: {
    outDir: 'build',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            { name: 'antd', test: /node_modules[\\/](antd|@ant-design|@rc-component|rc-[^\\/]+)[\\/]/ },
          ],
        },
      },
    },
  },
});
