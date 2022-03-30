import React from "react";
import { render, screen } from "@testing-library/react";
import TeacherSpecificDetails from "../components/teachers/TeacherSpecificDetails";

describe("SearchForm", () => {
    it("contact details page coming or not", () => {
        render(<TeacherSpecificDetails />);

        const heading = screen.getByRole("link", {
            name: /contactdetails/i,
        });

        expect(heading).toBeVisible();
    });
});
