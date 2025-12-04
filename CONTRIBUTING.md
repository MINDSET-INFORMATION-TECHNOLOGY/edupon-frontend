# Contributing to EduPons

This servers as our contribution guidelines for EduPons! This document provides guidelines and best practices for contributing to the project.

## Branch Naming Convention

Use the following prefixes for branch names:

- \`feature/\` - New features (e.g., \`feature/student-portfolio\`)
- \`fix/\` - Bug fixes (e.g., \`fix/login-validation\`)
- \`refactor/\` - Code refactoring (e.g., \`refactor/api-client\`)
- \`docs/\` - Documentation updates (e.g., \`docs/readme-update\`)
- \`test/\` - Test additions or modifications (e.g., \`test/auth-flow\`)
- \`chore/\` - Maintenance tasks (e.g., \`chore/update-dependencies\`)

## Commit Message Format

Follow the Conventional Commits specification:

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### Types

- \`feat\`: New feature
- \`fix\`: Bug fix
- \`docs\`: Documentation changes
- \`style\`: Code style changes (formatting, missing semicolons, etc.)
- \`refactor\`: Code refactoring
- \`test\`: Adding or updating tests
- \`chore\`: Maintenance tasks

### Examples

\`\`\`
feat(auth): add email verification flow

Implemented email verification with token-based confirmation.
Users receive an email with a verification link after registration.

Closes #123
\`\`\`

\`\`\`
fix(profile): resolve avatar upload issue

Fixed file size validation and added proper error handling
for avatar uploads exceeding 5MB.
\`\`\`

## Code Style

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using \`any\` type
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types with TypeScript interfaces

### Chakra UI

- Use Chakra UI components whenever possible
- Follow the custom theme configuration
- Use responsive props for mobile-first design
- Maintain consistent spacing using Chakra's spacing scale

### File Naming

- Components: PascalCase (e.g., \`StudentProfile.tsx\`)
- Utilities: camelCase (e.g., \`formatDate.ts\`)
- Hooks: camelCase with \`use\` prefix (e.g., \`useAuth.ts\`)
- Types: PascalCase (e.g., \`User.ts\`)

## Code Review Process

1. **Self-review**: Review your own code before requesting review
2. **Run checks**: Ensure all linting, formatting, and type checks pass
3. **Write tests**: Add tests for new features (when testing is set up)
4. **Update docs**: Update documentation if needed
5. **Request review**: Assign reviewers to your PR
6. **Address feedback**: Respond to all review comments
7. **Merge**: Squash and merge after approval

## Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] All linting and type checks pass (\`npm run lint && npm run type-check\`)
- [ ] Code is properly formatted (\`npm run format\`)
- [ ] No console.log or debugging code remains
- [ ] Commit messages follow the convention
- [ ] PR description clearly explains the changes
- [ ] Related issue is referenced (if applicable)
- [ ] Documentation updated if needed

## What Not to Do

- Don't commit directly to \`main\` or \`dev\` branches
- Don't commit \`.env\` files or sensitive data
- Don't use \`any\` type unless absolutely necessary
- Don't ignore ESLint warnings
- Don't create large PRs (keep them focused and reviewable)
- Don't skip code reviews

## Reporting Bugs

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Detailed steps to reproduce the bug
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, Node version, etc.

## Suggesting Features

When suggesting features:

1. **Use case**: Explain the problem you're trying to solve
2. **Proposed solution**: Describe your suggested approach
3. **Alternatives**: List alternative solutions considered
4. **Additional context**: Any other relevant information

## Getting Help

If you need help:

- Check existing documentation
- Search for similar issues
- Ask in team communication channels
- Reach out to the development lead

## Thank You

Your contributions make EduPons better for everyone. Thank you for being part of the team!
