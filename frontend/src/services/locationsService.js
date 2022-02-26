import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getLocations";

export async function getLocations() {
    const { data: locations } = await http.get(apiEndpoint);
    return locations;
}
