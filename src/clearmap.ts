import { GoalMapService } from './services/goalMapService';
import { MapService } from './services/mapService';
import { logger } from './utils/logger';

class ClearMap {
    static async run(): Promise<void> {
        try {
            logger.info(`Starting clear map`);
            const goalMap = await GoalMapService.getGoalMap();
            MapService.clearMap(goalMap);
        } catch (error: any) {
            logger.error(`Error while running program clear map: ${error}`);
        }
    }

}

ClearMap.run();