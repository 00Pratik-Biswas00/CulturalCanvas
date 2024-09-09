import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const originalData = JSON.parse(
  fs.readFileSync(__dirname + "/words_dictionary.json", "utf-8")
);

let formattedData = {};

for (let word in originalData) {
  formattedData[word] = word;
}

fs.writeFileSync(
  __dirname + "/formatted_words.json",
  JSON.stringify(formattedData, null, 2)
);

console.log("File has been written successfully");
