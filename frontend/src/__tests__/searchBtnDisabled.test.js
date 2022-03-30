import { render, screen } from "@testing-library/react";
import SearchForm from "../components/searchForm";

describe("SearchForm", () => {
    it("search form disabled or not without skill and tecaher selection", () => {
        render(<SearchForm />);

        const heading = screen.getByRole("button", {
            name: /search/i,
        });

        expect(heading).toBeDisabled();
    });
});
