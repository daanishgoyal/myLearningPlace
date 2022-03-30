import React from "react";
import { render, screen } from "@testing-library/react";
import BookingStatusComponent from "../components/teachers/BookingStatus";

describe("BookingStatusComponent", () => {
    it("renders BookingStatusComponent checking", () => {
        render(<BookingStatusComponent />);

        const heading = screen.getByRole("heading", {
            name: /last booked appointment details :/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
