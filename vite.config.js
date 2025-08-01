import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // If using Emotion
      babel: {
        plugins: ['@emotion/babel-plugin'] // If using Emotion
      }
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add any other aliases you need
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add if using TypeScript
  },
  base: '/rui-portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production', // Disable in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) {
              return 'radix'
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'animations'
            }
            return 'vendor'
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: false // Disable error overlay if needed
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      // Add other large dependencies that don't change often
    ],
    exclude: ['js-big-decimal'] // Add any problematic dependencies
  }
})