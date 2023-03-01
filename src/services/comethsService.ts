import { appConfig } from "../config/appConfig";
import { IComethPoint } from "../interfaces/interfaces";
import { logger } from "../utils/logger";
import { EntitiesService } from "./entitiesService";

export class ComethsService extends EntitiesService {
    static async post(comethPoints: IComethPoint[], delay: number, candidateId: string): Promise<void> {
        logger.info('call post Cometh');
        await super.post(comethPoints, delay, appConfig.endpoints.comeths, candidateId);
    }
}