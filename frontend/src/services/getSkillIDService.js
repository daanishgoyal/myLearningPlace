import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getSkillId";

export async function getSkillId(skillName) {
    const { data: skill } = await http.post(apiEndpoint, {
        SkillName: String(skillName),
    });
    return skill;
}
