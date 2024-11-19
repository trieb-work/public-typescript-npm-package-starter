# TypeScript Package Template

This is a template for creating a TypeScript package.

## Features

- TypeScript
- Eslint
- Prettier
- Semantic Release to NPM and GitHub Releases with auto-generated changelog
- Testing with Vitest
- GitHub Actions for test, build and release on main branch
- Commit message hook for linting staged files
- Conventional Commits
- Code Coverage Report and PR Comments

## Getting Started

1. Clone the repository
2. For private repos: set NPM_TOKEN in repository secrets (For public repos, it is already set via organization secrets)
3. Run `pnpm install` to install the dependencies
4. Run `pnpm run build` to build the project
5. Run `pnpm run dev` to develop the project
6. Run `pnpm run test` to test the project

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
