import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getContactDetails";

export async function getContactDetails(teacherId) {
    try {
        const { data: contactDetails } = await http.post(apiEndpoint, {
            teacher_id: String(teacherId),
        });
        return contactDetails;
    } catch {}
}
