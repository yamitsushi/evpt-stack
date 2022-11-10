import { Express } from "express"

type ViteServer = (Server: Express, base: string) => void

const viteServer: ViteServer = async (Server, base) => {
  const { createServer } = await import("vite")
  const fs = await import("fs")
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  })

  Server.use(vite.middlewares)

  Server.use("*", async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, "")
      const template = await vite.transformIndexHtml(url, fs.readFileSync("./index.html", "utf-8"))
      const render = (await vite.ssrLoadModule("/src/client/entry-server.tsx")).render
      const rendered = await render(url, undefined)
      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "")
      res.status(200).set({ "Content-Type": "text/html" }).end(html)
    } catch (e: any) {
      vite?.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })
}

export default viteServer
