# EVPT Stack

Uses Vite to bundle Front-end

Uses Esbuild to bundle Back-end

All in Typescript

```bash
# First copy .env.example to .env

$ npm run dev # Start the back-end and load the front-end using SSR

$ npm run build # Bundle both front-end and back-end to dist

$ node . # start the bundled back-end
```

## Production Note

- Change NODE_ENV to `production` before building on `.env` to use the bundled front-end instead of SSR
