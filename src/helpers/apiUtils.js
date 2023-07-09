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

export { getMapData, getMapsData };
