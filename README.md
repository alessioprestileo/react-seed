# React seed

This project can be used as a seed for a React project. Edit by Karl-Erik

## Table of Contents

- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run eslint:fix](#npm-run-eslint-fix)
  - [npm run eslint:log](#npm-run-eslint-log)
  - [npm run precommit](#npm-run-precommit)
  - [npm run sass-lint:log](#npm-run-sass-lint-log)
  - [npm run serve:dev](#npm-run-serve-dev)
  - [npm run test](#npm-run-test)
  - [npm run tslint:fix](#npm-run-tslint-fix)
  - [npm run tslint:log](#npm-run-tslint-log)
  - [npm run type-check](#npm-run-type-check)

## Dependencies

In order to install the dependencies needed by this project, run the following command from within the project directory:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Alias for `npm run serve:dev`.

### <a id="npm-run-eslint-fix"></a>`npm run eslint:fix`

Runs eslint on all '.js' files within the project, according to what is specified in .eslintrc.json and .eslintignore.\
Fixes the problems found.

### <a id="npm-run-eslint-log"></a>`npm run eslint:log`

Runs eslint on all '.js' files within the project, according to what is specified in .eslintrc.json and .eslintignore.\
Logs the results.

### `npm run precommit`

Runs linting and type-checking on the whole project and then runs all tests.\
It is run automatically by husky on `git commit`.

### <a id="npm-run-sass-lint-log"></a>`npm run sass-lint:log`

Runs sass-lint on all '.scss' files within the project, according to what is specified in .sasslintrc.\
Logs the results.

### <a id="npm-run-serve-dev"></a>`npm run serve:dev`

Serves the app in development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.\
The page will reload if you make edits.\

### `npm run test`

Finds all '.test.ts' and '.test.tsx' files within the project and runs the tests they contain.\

### <a id="npm-run-tslint-fix"></a>`npm run tslint:fix`

Runs tslint on all '.ts' and '.tsx' files within the project, according to what is specified in .tslint.json.\
Fixes the problems found.

### <a id="npm-run-tslint-log"></a>`npm run tslint:log`

Runs tslint on all '.ts' and '.tsx' files within the project, according to what is specified in .tslint.json.\
Logs the results.

### <a id="npm-run-type-check"></a>`npm run type-check`

Runs TypeScript type-checking on all '.ts' and '.tsx' files within the project, according to what is specified in .tsconfig.json.\
Logs the results.
