import { PodCastModel } from './podCast-model';
export interface FilterPodcastModel {
    statusCode: number;
    body: PodCastModel[] 
}