import { ComethsDirection, SoloonsColor } from "../enums/enums";

//goal map
export interface IGoalMap {
    goal: string[][];
}

//generic
//polyanets
export interface IPoint {
    row: number;
    column: number;
}
export interface IPostData {
    candidateId: string;
    row: number;
    column: number;
}

//soloons
export interface IPostSoloonData extends IPostData {
    color: SoloonsColor;
}
export interface ISoloonPoint extends IPoint {
    color: SoloonsColor;
}

//cometh
export interface IPostComethData extends IPostData {
    direction: ComethsDirection;
}

export interface IComethPoint extends IPoint {
    direction: ComethsDirection;
}

//type guards

//PolyanetPoint type guard
export function isPolyanetPoint(obj: IPoint): obj is IPoint {
    return 'row' in obj && 'column' in obj;
}
//SoloonPoint type guard
export function isSoloonPoint(obj: IPoint): obj is ISoloonPoint {
    return 'row' in obj && 'column' in obj && 'color' in obj;
}
//ComethPoint type guard
export function isComethPoint(obj: IPoint): obj is IComethPoint {
    return 'row' in obj && 'column' in obj && 'direction' in obj;
}


