import React from "react";
import { render, screen } from "@testing-library/react";
import CommentsComponent from "../components/teachers/CommentsComponent";

describe("CommentsComponent", () => {
    it("renders CommentsComponent checking", () => {
        render(<CommentsComponent />);

        const heading = screen.getByRole("heading", {
            name: /comments/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
