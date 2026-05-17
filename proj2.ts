import figlet from 'figlet';

const server = Bun.serve({
    port: 3001,
    routes: {
        "/figlet": () => {
            const body = figlet.textSync('Bun');
            return new Response(body);
        }
    }
});
 
console.log(`Listening on port ${server.url}`);