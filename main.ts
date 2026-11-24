// The Worst App Idea Ever Pitched — one sentence, at most 240 characters:
// pitch the worst, most useless app imaginable.
const { writeFileSync, mkdirSync } = require("node:fs");

const pitch =
  "A subscription app that mails you one single sock every month, so after a " +
  "year you own twelve unrelated socks and one drawer full of questions.";

function validate(text: string, limit: number): string[] {
  const problems: string[] = [];
  const chars = [...text].length;
  if (chars === 0 || chars > limit) problems.push(`pitch is ${chars} chars, limit ${limit}`);
  if (text.includes("\n")) problems.push("pitch must be one sentence on one line");
  if (!text.endsWith(".")) problems.push("pitch must end with a period");
  return problems;
}

const problems = validate(pitch, 240);
if (problems.length > 0) throw new Error(problems.join("; "));
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`wrote ${[...pitch].length} chars to /output/entry.txt`);
