## Bundling issue

Unsure how to tell svelte / vite not to bundle the node dependencies.


```bash
pnpm install

# builds self contained svelte-kit module
# success, node modules by vite, it's done by esbuild in the adapter
pnpm working

# builds uses module svelte-kit module
# build error, node modules are by vite in SSR mode which brings in node dependencies
# adapter cannot bundle the node dependencies when building for cloudflare pages
pnpm broken

```