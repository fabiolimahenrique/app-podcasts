import { HttpMethod } from './utils/http-method';
import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";

const server = http.createServer( async (req:  http.IncomingMessage , res: http.ServerResponse) => {
   
   const [baseUrl, queryString] = req.url?.split("?") || ["", ""] ;
   
   if (req.method === HttpMethod.GET && req.url === Routes.LIST ) {
      await getListEpisodes(req, res);
   } 

   if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
   }    

})

const PORTA = process.env.PORT;

server.listen(PORTA, () => {
  console.log(`Servidor iniciado na porta: ${PORTA} `)
});