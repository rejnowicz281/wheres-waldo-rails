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

export { getMapsData };
