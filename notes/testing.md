why always use npx tsc --watch and npm test?

- npm test runs unit test using jest.
  When checking TS, jest needs babel
  Babel will transpile TS into JS
  After that, jest will just check the transpiled JS code
  Therefore, unit tests may not address TS errors properly.
- that's why we need to run npx tsc --watch
  it will regularly compile the code anytime we save.
  this will help addressing TS errors early.
- in short :
  jest is useful for testing the code logic
  compilation is useful for checking TS errors
