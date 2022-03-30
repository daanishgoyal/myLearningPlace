import { render, screen } from "@testing-library/react";
import SearchForm from "../components/searchForm";

describe("SearchForm", () => {
    it("Heading in the first page is there or not", () => {
        render(<SearchForm />);

        const heading = screen.getByRole("heading", {
            name: /search for online\/home tutors/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
