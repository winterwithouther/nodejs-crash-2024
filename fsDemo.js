// import fs from "fs";
import fs from "fs/promises"

// // readFile() - callback
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // readFileSynx() - Synchronous version
// const data = fs.readFileSync("./test.txt", "utf-8");

// readFile() - Promise .then()
// fs.readFile("./test.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile("./test.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Write file

const writeFile = async () => {
    try {
        await fs.writeFile("./test.txt", "Hello I am writing to this file");
        console.log("File written to...");
    } catch (err) {
        console.log(err);
    }
}

// append file
const appendFile = async () => {
    try {
        await fs.appendFile("./test.txt", "\nThis is appended text");
        console.log("File appended to...");
    } catch(err) {
        console.log(err);
    }
}

writeFile();
appendFile();
readFile();