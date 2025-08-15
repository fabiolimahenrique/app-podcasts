import * as http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller"

const server = http.createServer( async (req:  http.IncomingMessage , res: http.ServerResponse) => {
   if (req.method === "GET") {
      await getListEpisodes(req, res);
   } 
})

const PORTA = process.env.PORT;

server.listen(PORTA, () => {
  console.log(`Servidor iniciado na porta: ${PORTA} `)
});