import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/booking/create";

export async function createBooking(teacherId, userId, skillId, slotId) {
    const { data: bookingConfirmation } = await http.post(apiEndpoint, {
        teacherId: String(teacherId),
        userId: String(userId),
        skillId: String(skillId),
        slotId: String(slotId),
    });
    return bookingConfirmation;
}
