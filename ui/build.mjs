// Build the an-ui package: tsc emits ESM + .d.ts into dist/, then the static
// style and font assets are copied alongside it. Kept dependency-free on
// purpose — the repo already ships typescript, and design-sync only needs a
// real dist/ entry plus its .d.ts tree.
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dist = resolve(root, "dist");

// Clear dist/ by deleting files and leaving the directories standing. On a
// OneDrive-synced checkout the sync engine keeps folder handles open, so any
// rmdir fails with EPERM; stale files are what actually matter, and tsc
// rewrites the directory tree anyway.
await mkdir(dist, { recursive: true });
async function clearFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const target = resolve(dir, entry.name);
    if (entry.isDirectory()) await clearFiles(target);
    else await rm(target, { force: true, maxRetries: 5, retryDelay: 100 });
  }
}
await clearFiles(dist);

// Resolve tsc's JS entry and run it under this node, rather than shelling out
// to npx — spawning a .cmd shim is not portable across platforms.
const require = createRequire(resolve(root, "../package.json"));
const tsc = require.resolve("typescript/lib/tsc.js");

execFileSync(process.execPath, [tsc, "-p", "tsconfig.json"], { cwd: root, stdio: "inherit" });

await cp(resolve(root, "src/styles"), resolve(dist, "styles"), { recursive: true });

// The shipped component stylesheet is tokens + components concatenated, so it
// stands alone: anything that loads it gets the custom properties its own
// rules depend on, with no @import to resolve. tokens.css is still copied
// beside it for consumers that only want the values.
const styles = resolve(dist, "styles");
await writeFile(
  resolve(styles, "components.css"),
  [
    await readFile(resolve(root, "src/styles/tokens.css"), "utf8"),
    await readFile(resolve(root, "src/styles/components.css"), "utf8"),
  ].join("\n")
);

console.log("an-ui: built dist/");
