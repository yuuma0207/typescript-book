# Requirements
```bash
npm install
```

# From empty directory

## Prepare `package.json`
```bash
npm init --yes
```
- Add `"type": "module",`

## Install TypeScript
```bash
npm install --save-dev typescript @types/node
```

## Prepare `tsconfig.json`

```bash
npx tsc --init
```

- Change `target` option and `module` option

```diff
- "target": "es2016"
+ "target": "es2020"

- "module": "commonjs"
+ "module": "esnext"
```

- Add `moduleResolution` option

```diff
- // "moduleResolution": "node"
+ "moduleResolution": "node"
```

- Add `outDir` option

```diff
- // "outDir": "./"
+ "outDir": "./dist"
```

- Add `include` option after compiler options block

```diff
+ "include": ["./src/**/*.ts"]
```