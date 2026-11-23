import { writeFileSync, mkdirSync } from "node:fs";

// One funny line for make.fun's The Vacuum's Alibi bounty.
// A robot vacuum explains why it missed a spot (<=200 chars) to /output/entry.txt.
const line =
  "My map shows the spot under the chair leg. The chair leg is load-bearing, so I left it. I respect structure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
