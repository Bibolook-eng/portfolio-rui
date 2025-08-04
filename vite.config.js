import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      // Ensure JSX runtime is properly configured
      jsxRuntime: 'automatic',
      // Babel configuration if needed
      babel: {
        plugins: [
          // Add any required Babel plugins here
        ]
      }
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add other aliases if needed
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add TypeScript if using
  },
  base: '/portfolio-rui/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false, // Disable in production
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
    open: true // Optional: open browser on dev server start
  },
  preview: {
    port: 4173,
    strictPort: true
  }
})