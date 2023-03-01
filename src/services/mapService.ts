import axios from "axios";
import { appConfig } from "../config/appConfig";
import { MapCellType } from "../enums/enums";
import { IGoalMap } from "../interfaces/interfaces";

export class MapService {
    static async clearMap(goalMap: IGoalMap): Promise<void> {

        for (let i = 0; i < goalMap.goal.length; i++) {
            for (let j = 0; j < goalMap.goal[i].length; j++) {
                const data: any = {
                    data: {
                        candidateId: appConfig.candidateId,
                        row: i,
                        column: j
                    }
                };
                if (goalMap.goal[i][j] === MapCellType.POLYANET) {
                    console.log(data);
                    await axios.delete(appConfig.endpoints.polyanets, data);
                } else {
                    const cellType = goalMap.goal[i][j].split('_')[1];
                    if (cellType === MapCellType.COMETH) {
                        await axios.delete(appConfig.endpoints.comeths, data);
                    }
                    if (cellType === MapCellType.SOLOON) {
                        await axios.delete(appConfig.endpoints.soloons, data);
                    }
                }
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }



}