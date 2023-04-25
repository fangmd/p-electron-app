elector

react hooks + typescript + recoil + less

[x] 代码规范 eslint + husky + prettier


## [项目创建](https://www.electronforge.io/)

```
npm init electron-app@latest my-new-app -- --template=webpack-typescript
```

## [添加 react 支持](https://www.electronforge.io/guides/framework-integration/react-with-typescript)

```
# tsconfig.json
"jsx": "react-jsx",
```

```
pnpm add react react-dom
pnpm add -D @types/react @types/react-dom
```

```
# app.tsx
import { createRoot } from "react-dom/client"

const App: React.FC = () => {
  return <div>hello</div>
}

createRoot(document.getElementById("root")!).render(<App />)
```

```
# renderer.ts
import './app';
```



