import { appConfig } from './config/appConfig';
import { GoalMapService } from './services/goalMapService';
import { PolyanetService } from './services/polyanetsService';
import { logger } from './utils/logger';

class PhaseOne {
    static async run(): Promise<void> {
        try {
            logger.info(`Starting phase one`);
            const goalMap = await GoalMapService.getGoalMap();
            const { polyanetPoints } = await GoalMapService.getPoints(goalMap);
            const { delay, candidateId } = appConfig;
            await PolyanetService.post(polyanetPoints, delay, candidateId);
        } catch (error: any) {
            logger.error(`Error while running program phase one: ${error}`);
        }
    }

}

PhaseOne.run();