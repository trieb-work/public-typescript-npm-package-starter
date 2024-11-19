module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // Analyze commits to determine the version bump
    "@semantic-release/release-notes-generator", // Generate release notes
    "@semantic-release/changelog", // Update the changelog file
    [
      "@semantic-release/npm",
      {
        npmPublish: true, // Publish the package to NPM
        tarballDir: "dist", // Optional: create tarball in the dist folder
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["dist/*.tgz"], // Attach tarball to GitHub releases
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],
  ],
};
