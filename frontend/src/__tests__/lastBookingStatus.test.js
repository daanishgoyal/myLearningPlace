import React from "react";
import { render, screen } from "@testing-library/react";
import BookingStatusComponent from "../components/teachers/BookingStatus";

describe("BookingStatusComponent", () => {
    it("renders BookingStatusComponent checking", () => {
        render(<BookingStatusComponent />);

        const heading = screen.getByText(
            /recently booked appointment details:/i
        );

        expect(heading).toBeInTheDocument();
    });
});
