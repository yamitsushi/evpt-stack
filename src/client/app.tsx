import { useState } from "preact/hooks"
import preactLogo from "./assets/preact.svg"
import "./app.css"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
        <a href="https://esbuild.github.io" target="_blank">
          <img src="/esbuild.svg" class="Esbuild logo" alt="Esbuild logo" />
        </a>
      </div>
      <h1>Esbuild + Vite + Preact + TS</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/client/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">Click on the Vite, Esbuild and Preact logos to learn more</p>
    </>
  )
}
