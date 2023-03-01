import dotenv from "dotenv"

dotenv.config()

interface AppConfig {
    candidateId: string,
    endpoints: {
        goalMap: string;
        polyanets: string;
        soloons: string;
        comeths: string;
    };
    delay: number;
}

export const appConfig: AppConfig = {
    endpoints: {
        goalMap: `https://challenge.crossmint.io/api/map/${process.env.CANDIDATE_ID}/goal`,
        polyanets: 'https://challenge.crossmint.io/api/polyanets',
        soloons: 'https://challenge.crossmint.io/api/soloons',
        comeths: 'https://challenge.crossmint.io/api/comeths',
    },
    delay: 2000,
    candidateId: process.env.CANDIDATE_ID || ""
};
