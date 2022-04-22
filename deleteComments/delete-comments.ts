import fs from "fs";

export function readFile(filename: string): number {
  let fileContent: string = "";
  try {
    fileContent = fs.readFileSync(filename, "utf-8");
  } catch (err) {
    throw new Error("An error occurred with accessing the files.");
  }

  const charactersFromFile: string[] = fileContent.split("");

  var clear_text = "";
  try {
    fs.writeFileSync("clean-filename.js", clear_text);
  } catch (error) {
    throw new Error("An error occurred with accessing the files.");
  }

  return;
}

console.log(readFile("delete.js"));
