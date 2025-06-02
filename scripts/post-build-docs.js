const fs = require("node:fs");
const path = require("node:path");

const sourceDir = path.join("docs", "browser");
const destDir = "docs";

// Ensure source directory exists
if (!fs.existsSync(sourceDir)) {
  console.log(`Source directory ${sourceDir} does not exist. Nothing to move.`);
  process.exit(0);
}

// Ensure destination directory exists (it should be created by 'ng build')
if (!fs.existsSync(destDir)) {
  console.error(
    `Destination directory ${destDir} does not exist. Please ensure 'ng build' creates it.`
  );
  process.exit(1);
}

console.log(`Moving contents from ${sourceDir} to ${destDir}...`);

// Read all items from source directory
const items = fs.readdirSync(sourceDir);

items.forEach(item => {
  const sourcePath = path.join(sourceDir, item);
  const destPath = path.join(destDir, item);

  // If an item with the same name exists in the destination, it will be overwritten.
  // This is generally desired as the 'browser' contents are the primary build artifacts.
  try {
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved: ${sourcePath} -> ${destPath}`);
  } catch (err) {
    console.error(`Error moving ${sourcePath} to ${destPath}:`, err);
    // Exit if a critical move fails, to avoid incorrect state
    process.exit(1);
  }
});

// Remove the now-empty source directory
try {
  fs.rmdirSync(sourceDir);
  console.log(`Successfully removed empty directory: ${sourceDir}`);
} catch (err) {
  console.error(
    `Error removing directory ${sourceDir}. It might not be empty or another issue occurred:`,
    err
  );
  // It's important that this directory is empty for rmdirSync to succeed without force.
  if (fs.existsSync(sourceDir) && fs.readdirSync(sourceDir).length > 0) {
    console.error(
      `${sourceDir} is not empty. Some files might not have been moved correctly.`
    );
  }
}

console.log("File operations completed.");
