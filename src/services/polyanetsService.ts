import { appConfig } from "../config/appConfig";
import { IPoint } from "../interfaces/interfaces";
import { EntitiesService } from "./entitiesService";
import { logger } from '../utils/logger';
export class PolyanetService extends EntitiesService {
    static async post(soloonsPoints: IPoint[], delay: number, candidateId: string): Promise<void> {
        logger.info('call post Polyanet');
        await super.post(soloonsPoints, delay, appConfig.endpoints.polyanets, candidateId);
    }

}