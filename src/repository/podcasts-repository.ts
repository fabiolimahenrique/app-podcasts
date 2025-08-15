import fs from "fs";
import path from "path";
import { PodCast } from "../models/podCast-model";



const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repoPodcast = async (): Promise<PodCast[]> => {
  const data = fs.readFileSync(pathData, "utf-8");

  const jsonFile = JSON.parse(data);

  return jsonFile;
};
