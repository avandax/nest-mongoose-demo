## Nest demo


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn build
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
## Mongodb migration
```bash
# add migration file
$ yarn mgrt:create

# exec mongodb migration scripts
$ yarn mgrt

```

## Git release tag
```bash
$  yarn sv 1.0.0
```

## Lint And prettier
```bash
$  yarn lint
$  yarn format
```
## Git hooks
```
// .husky
{
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "yarn build"
  }
}
```

