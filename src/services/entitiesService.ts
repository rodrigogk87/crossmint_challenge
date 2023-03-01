import axios from "axios";
import { isComethPoint, isSoloonPoint, IPoint, IPostData } from "../interfaces/interfaces";
import { logger } from '../utils/logger';

export class EntitiesService {
    protected static async postSingle(
        endpoint: string,
        candidateId: string,
        point: IPoint,
    ): Promise<void> {
        const data: IPostData = {
            candidateId,
            row: point.row,
            column: point.column,
            ...(isSoloonPoint(point) && { color: point.color }),
            ...(isComethPoint(point) && { direction: point.direction }),
        };
        try {
            logger.info(`call postSingle entity with data endpoint: ${endpoint}, candidateId: ${candidateId}, point column: ${point.column}, point row: ${point.row}`);
            await axios.post(endpoint, data);
        } catch (error: any) {
            logger.error(`Error while posting point to row ${point.row}, column ${point.column}: ${error} at endpoint ${endpoint}`);
            throw error;
        }
    }

    static async post(points: IPoint[], delay: number, endpoint: string, candidateId: string): Promise<void> {
        for (const point of points) {
            logger.info(`call post entity with data endpoint: ${endpoint}, candidateId: ${candidateId}, point column: ${point.column}, point row: ${point.row}`);
            try {
                await this.postSingle(endpoint, candidateId, point);
                await new Promise(resolve => setTimeout(resolve, delay)); // Add delay between each POST request
            } catch (error: any) {
                logger.error(`Error while posting point: ${error}`);
            }
        }
    }
}