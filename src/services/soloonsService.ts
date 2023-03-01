import { appConfig } from "../config/appConfig";
import { ISoloonPoint } from "../interfaces/interfaces";
import { logger } from "../utils/logger";
import { EntitiesService } from "./entitiesService";

export class SoloonsService extends EntitiesService {
    static async post(soloonsPoints: ISoloonPoint[], delay: number, candidateId: string): Promise<void> {
        logger.info('call post Soloon');
        await super.post(soloonsPoints, delay, appConfig.endpoints.soloons, candidateId);
    }
}