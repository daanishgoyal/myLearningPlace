import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getComments";

export async function getComments(teacherId) {
    const { data: comments } = await http.post(apiEndpoint, {
        teacher_id: String(teacherId),
    });
    return comments;
}
