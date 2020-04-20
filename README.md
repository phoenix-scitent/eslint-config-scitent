# eslint-config-scitent

Scitent's ESLint config. Based on `airbnb` and `prettier`.

## Installing
With npm: `npm install eslint-config-scitent --save-dev`;

With yarn: `yarn add -D eslint-config-scitent`

Make sure that you also install necessary `peerDeps`

## Usage
Simply add `scitent` to yours `.eslintrc`:
```
{
  "extends": ["scitent"],
  "rules": {}
}
```

### Frontend
```
{
  "extends": ["scitent/frontend"]
}
```

### Backend
```
{
  "extends": ["scitent/backend"]
}
```
Backend configuration relies on `babel-eslint` parser, so make sure that you have it installed as `devDependencies`.

## Necessary peerDeps
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [prettier](https://github.com/prettier/prettier)

## Test Libraries
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

## License
Copyright &copy; 2020 [Scitent](https://scitent.com).
Licensed under the [MIT License](LICENSE).
