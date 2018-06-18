# truffle-test-boilerplate

## Test
* Run `npm run test:ganache` in order to get the environment run.
* Run `npm run test:contracts` to run tests.
* Run `npm run test:contracts:coverage` to run test coverage.

## Notes
* Each `it` clause should test one isolated functionality.
* Use utils or zeppelin utils whenever possible.

## For each network, if unspecified, transaction options will default to the following values:
* gas: Gas limit used for deploys. Default is 4712388.
* gasPrice: Gas price used for deploys. Default is 100000000000 (100 Shannon).
