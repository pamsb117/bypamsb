import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const build = spawnSync(
  process.execPath,
  [fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)), "build", "--webpack"],
  {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
      NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "/bypamsb",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  },
);

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
writeFileSync(new URL("../out/.nojekyll", import.meta.url), "");
