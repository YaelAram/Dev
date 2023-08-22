import fs from "node:fs/promises";
import path from "node:path";

const folder = process.argv[2] ?? ".";

try {
  const files = await fs.readdir(folder);

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    const stat = await fs.stat(filePath);

    const fileType = stat.isDirectory() ? "d" : "f";
    const fileSize = stat.size.toString();
    const modifiedAt = stat.mtime.toLocaleString();

    return `${fileType}  ${file.padEnd(20)} ${fileSize.padStart(
      10
    )} ${modifiedAt}`;
  });

  const filesInfo = await Promise.all(filePromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
} catch (error) {
  console.error(error);
}
