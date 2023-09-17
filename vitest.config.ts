/// <reference types="vitest" />
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  envDir: "packages/main",
  test: {
    globals: true,
    include: [
      "src/**/*.{test,spec}.{ts,mts,cts,tsx}"
    ]
  },
  plugins: [
    viteTsConfigPaths()
  ]
})
