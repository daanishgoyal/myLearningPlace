import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/booking/search/userid";

export async function getBookingHistory(userId) {
    const { data: bookingHistory } = await http.post(apiEndpoint, {
        userId: String(userId),
        includePast: "true",
    });
    return bookingHistory;
}
