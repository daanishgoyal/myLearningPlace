import { render, screen } from "@testing-library/react";
import auth from "../services/authService";
import BookingHistory from "./../components/bookingHistory";

test("booking History on user login", async () => {
    await auth.login("email_1@gmail.com", "password_1");

    render(<BookingHistory />);

    const heading1 = screen.getByRole("heading", {
        name: /Welcome ABC,/i,
    });

    const heading2 = screen.getByRole("heading", {
        name: /profile information/i,
    });

    const heading3 = screen.getByRole("heading", {
        name: /booking history/i,
    });
    expect(heading1 && heading2 && heading3).toBeInTheDocument();
});
