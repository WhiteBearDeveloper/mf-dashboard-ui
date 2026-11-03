import { copyFile, mkdir, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

const componentsSource = resolve("src/components");
const componentsOutput = resolve("dist/components");

async function copyComponentStyles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await copyComponentStyles(sourcePath);
      continue;
    }

    if (!entry.name.endsWith(".module.scss")) {
      continue;
    }

    const outputPath = join(
      componentsOutput,
      relative(componentsSource, sourcePath),
    );

    await mkdir(dirname(outputPath), { recursive: true });
    await copyFile(sourcePath, outputPath);
  }
}

async function copyDirectory(sourceDirectory, outputDirectory) {
  await mkdir(outputDirectory, { recursive: true });
  const entries = await readdir(sourceDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = join(sourceDirectory, entry.name);
    const outputPath = join(outputDirectory, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, outputPath);
    } else {
      await copyFile(sourcePath, outputPath);
    }
  }
}

await copyComponentStyles(componentsSource);
await copyDirectory(resolve("src/styles"), resolve("dist/styles"));
await copyDirectory(resolve("src/assets"), resolve("dist/assets"));
