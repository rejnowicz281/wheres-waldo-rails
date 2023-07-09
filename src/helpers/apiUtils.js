import axios from "axios";
import { API_URL } from "./config";

async function getMapsData() {
    try {
        const response = await axios.get(`${API_URL}/maps`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getMapData(id) {
    try {
        const response = await axios.get(`${API_URL}/maps/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function sendScore(map_id, player_name, seconds) {
    try {
        const response = await axios.post(`${API_URL}/maps/${map_id}/scores`, {
            score: {
                player_name: player_name || "Anon",
                seconds,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { getMapData, getMapsData, sendScore };
