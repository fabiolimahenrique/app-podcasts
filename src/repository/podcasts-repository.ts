import fs from "fs";
import path from "path";
import { PodCastModel } from "../models/podCast-model";



const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repoPodcast = async (podCastName?: string): Promise<PodCastModel[]> => {
  const data = fs.readFileSync(pathData, "utf-8");

  let jsonFile = JSON.parse(data);

  if (podCastName) {
     jsonFile = jsonFile.filter( (podCast: PodCastModel) => 
        podCast.podCastName === podCastName)
  }

  return jsonFile;
};
