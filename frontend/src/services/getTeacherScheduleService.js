import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/getTeacherSchedule";

export async function getTeacherSchedule(teacherId) {
    const { data: teacherSchedule } = await http.post(apiEndpoint, {
        teacher_id: String(teacherId),
    });
    return teacherSchedule;
}
