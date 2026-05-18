import figlet from "figlet";
import front from '../three/front.html';

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": front,
    "/figlet": () => {
      const body = figlet.textSync('Bun!');
      return new Response(body);
    }
  }
});

console.log(`Listening on port ${server.url}`);