import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/cancelbooking";

export async function cancelBooking(bookingID) {
    const { data: cancelBookingConfirmation } = await http.post(apiEndpoint, {
        bookingID: String(bookingID),
    });
    return cancelBookingConfirmation;
}
