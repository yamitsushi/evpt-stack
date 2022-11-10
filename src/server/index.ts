import "dotenv/config"
import express from "express"
import viteServer from "./plugins/viteServer"

const port = process.env.PORT || 5173

// Create http server
const app = express()

if (process.env.NODE_ENV === "production") app.use(express.static("dist/client"))
else viteServer(app, "/")

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
