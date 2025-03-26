import type { Config } from "tailwindcss"
import sharedConfig from "@solarapp/tailwindcss"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config