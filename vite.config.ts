import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        'firebase',
        'firebase/app',
        'firebase/storage',
        'firebase/firestore',
        'firebase/auth'
      ],
      output: {
        globals: {
          firebase: 'firebase',
          'firebase/app': 'firebaseApp',
          'firebase/storage': 'firebaseStorage',
          'firebase/firestore': 'firebaseFirestore',
          'firebase/auth': 'firebaseAuth'
        }
      }
    }
  }
}));
