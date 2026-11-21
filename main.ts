import { mkdir, writeFile } from 'node:fs/promises';

const entry = `At 4:12, a red thread rests on the dock nail.
Across the reservoir, the far shore thins into blue.
Water touches the pilings, one by one.
Far water holds the unbroken sky.`;

await mkdir('output', { recursive: true });
await writeFile('output/entry.txt', entry, 'utf8');
