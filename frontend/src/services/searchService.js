import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/search";

export async function searchTeachers(data) {
    const result = [];
    try {
        const { data: teachers } = await http.post(apiEndpoint, {
            skill: data.skill,
            city: data.city,
        });
        return teachers;
    } catch {}
    return result;
}
