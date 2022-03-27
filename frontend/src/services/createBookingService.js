import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/booking/create";

export async function createBooking(teacherId, userId, skillId, slotId) {
    const { data: bookingConfirmation } = await http.post(apiEndpoint, {
        teacher_id: Number(teacherId),
        userId: Number(userId),
        skillId: Number(skillId),
        slotId: Number(slotId),
    });
    return bookingConfirmation;
}
