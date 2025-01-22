const path = require("node:path");
const fs = require("node:fs");

const activeParam = process?.argv?.slice(2);
const isDevelopment = activeParam.includes("development");
console.log("isDevelopment", isDevelopment, activeParam);

const scriptsDir = path.resolve(
  __dirname,
  isDevelopment ? "dist/static/scripts" : "build/static/scripts"
);
const bundleDir = path.resolve(scriptsDir, "bundle");
const entry = {};

// Ensure the bundle directory exists
if (!fs.existsSync(bundleDir)) {
  fs.mkdirSync(bundleDir, { recursive: true });
}

for (const file of fs.readdirSync(scriptsDir)) {
  if (file.endsWith(".js") && !file.startsWith("bundle")) {
    const name = path.basename(file, ".js");
    entry[name] = path.join(scriptsDir, file);
  }
}

module.exports = {
  entry,
  output: {
    filename: "[name].bundle.js", // [name] will be replaced by the key in the entry object
    path: bundleDir, // Output in the bundle directory
  },
  resolve: {
    extensions: [".js"],
  },
  mode: isDevelopment ? "development" : "production",
};
