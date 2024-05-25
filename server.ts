
// This server can be ignored for now as this file won't be used until the actual deployment

import { Application, Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";

const app = new Application();
const router = new Router();

router.get('/', async (ctx) => {
    const text = await Deno.readTextFile('./index.html');
    ctx.response.headers.set("Content-Type", "text/html");
    ctx.response.body = text;
});

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

console.log("Server is running on http://localhost:8000");
