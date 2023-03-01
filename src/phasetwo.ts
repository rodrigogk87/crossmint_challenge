import { appConfig } from './config/appConfig';
import { ComethsService } from './services/comethsService';
import { GoalMapService } from './services/goalMapService';
import { PolyanetService } from './services/polyanetsService';
import { SoloonsService } from './services/soloonsService';
import { logger } from './utils/logger';

class PhaseTwo {
    static async run(): Promise<void> {
        try {
            logger.info(`Starting phase two`);
            const goalMap = await GoalMapService.getGoalMap();
            const { polyanetPoints, soloonPoints, comethPoints } = await GoalMapService.getPoints(goalMap);
            const { delay, candidateId } = appConfig;
            await PolyanetService.post(polyanetPoints, delay, candidateId);
            await SoloonsService.post(soloonPoints, delay, candidateId);
            await ComethsService.post(comethPoints, delay, candidateId);
        } catch (error: any) {
            logger.error(`Error while running program phase two: ${error}`);
        }
    }

}

PhaseTwo.run();