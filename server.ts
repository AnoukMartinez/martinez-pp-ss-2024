
import { Application, Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { join } from "https://deno.land/std@0.59.0/path/posix.ts";

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
