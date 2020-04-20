# eslint-config-scitent

Scitent's ESLint config. Relies on `airbnb` and `prettier`.

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
