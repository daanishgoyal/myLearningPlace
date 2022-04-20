import { render, screen } from "@testing-library/react";
import auth from "../services/authService";
import BookingHistory from "./../components/bookingHistory";

test("renders booking history cancel cancel appointment or not", async () => {
    await auth.login("email_1@gmail.com", "password_1");
    render(<BookingHistory />);
    const { container } = render(<BookingHistory />);
    expect(container).toMatchSnapshot();
});
