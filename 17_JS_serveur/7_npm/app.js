import Fastify from "fastify";
import { findTodos } from "./functions/todos_storage.js";
import { removeTodo } from "./functions/todos_storage.js";

const fastify = Fastify({
  logger: true,
});

fastify.get("/todos", async (request, reply) => {
  reply.send(await findTodos());
});

fastify.delete("/todos", async (request, reply) => {
  await removeTodo(parseInt(request.query.id, 10));
  reply.code(204);
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
