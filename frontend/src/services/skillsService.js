import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getSkills";

export async function getSkills() {
    const { data: skills } = await http.get(apiEndpoint);
    return skills;
}
