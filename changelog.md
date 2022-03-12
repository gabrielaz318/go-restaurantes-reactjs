### 04/10/2021
#### Instal typescript
```shell
yarn add typescript -D
```
#### Initializing typescript configuration
```shell
yarn tsc --init
```
#### Edited config in tsconfig.json
```json
    {
        "compilerOptions": {
            "lib": ["dom","DOM.Iterable","ESNext"],
            "allowJs": true,
            "jsx": "react-jsx",
            "noEmit": true,
            "strict": true,
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "allowSyntheticDefaultImports": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true    
        },
        "include": ["src"]
    }
```
#### Initializing presets for babel
```shell
yarn add @babel/preset-typescript -D
```
#### Initializing presets for react-dom, react and react-router-dom 
```shell
yarn add @types/react-dom -D
yarn add @types/react -D
yarn add @types/react-router-dom -D
```
#### finished converting the food component from class to typescript