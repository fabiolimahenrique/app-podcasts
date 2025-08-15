import * as http from "http";

const server = http.createServer( (req:  http.IncomingMessage , res: http.ServerResponse) => {
    
})

const PORTA = process.env.PORT;

server.listen(PORTA, () => {
  console.log(`Servidor iniciado na porta: ${PORTA} `)
});