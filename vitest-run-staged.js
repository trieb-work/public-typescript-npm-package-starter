const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Helper to find the co-aligned test file
const findTestFile = (filePath) => {
  const ext = path.extname(filePath);
  const testFile = filePath.replace(ext, `.test${ext}`);
  return fs.existsSync(testFile) ? testFile : null;
};

// Run Vitest for staged test files
(async () => {
  const stagedFilesOutput = execSync('git diff --cached --name-only', {
    encoding: 'utf-8',
  });
  const stagedFiles = stagedFilesOutput.trim().split('\n');

  const testFiles = stagedFiles
    .filter((file) => file.endsWith('.ts') && !file.includes('.test'))
    .map((file) => findTestFile(file))
    .filter(Boolean); // Remove nulls

  if (testFiles.length > 0) {
    console.log('Running tests for staged files:', testFiles);
    execSync(`vitest run ${testFiles.join(' ')}`, { stdio: 'inherit' });
  } else {
    console.log('No co-aligned test files found for staged files.');
  }
})();
