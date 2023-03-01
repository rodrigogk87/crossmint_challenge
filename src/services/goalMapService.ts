import axios from "axios";
import { appConfig } from "../config/appConfig";
import { ComethsDirection, MapCellType, SoloonsColor } from "../enums/enums";
import { IComethPoint, IGoalMap, IPoint, ISoloonPoint } from "../interfaces/interfaces";
import { logger } from '../utils/logger';

export class GoalMapService {
    static async getGoalMap(): Promise<IGoalMap> {
        logger.info(`call getGoalMap`);
        const endpoint = appConfig.endpoints.goalMap;
        try {
            const response = await axios.get<IGoalMap>(endpoint);
            const goalMap: IGoalMap = response.data;
            return goalMap;
        } catch (error: any) {
            logger.error(`Error while getting goal map: ${error} at endpoint ${endpoint}`);
            throw error;
        }
    }

    static getPoints(goalMap: IGoalMap): { comethPoints: IComethPoint[], soloonPoints: ISoloonPoint[], polyanetPoints: IPoint[] } {
        try {
            logger.info(`call getPoints`);
            const comethPoints: IComethPoint[] = [];
            const soloonPoints: ISoloonPoint[] = [];
            const polyanetPoints: IPoint[] = [];
            for (let i = 0; i < goalMap.goal.length; i++) {
                for (let j = 0; j < goalMap.goal[i].length; j++) {
                    if (goalMap.goal[i][j] === MapCellType.POLYANET) {
                        polyanetPoints.push({ row: i, column: j });
                    } else {
                        const cellType = goalMap.goal[i][j].split('_')[1];
                        if (cellType === MapCellType.COMETH) {
                            const direction = goalMap.goal[i][j].split('_')[0];
                            comethPoints.push({ row: i, column: j, direction: ComethsDirection[direction as keyof typeof ComethsDirection] });
                        }
                        if (cellType === MapCellType.SOLOON) {
                            const color = goalMap.goal[i][j].split('_')[0];
                            soloonPoints.push({ row: i, column: j, color: SoloonsColor[color as keyof typeof SoloonsColor] });
                        }
                    }
                }
            }
            return { comethPoints, soloonPoints, polyanetPoints };
        } catch (error: any) {
            logger.error(`Error while getting points: ${error}`);
            throw error;
        }
    }
}