import { render, screen } from "@testing-library/react";
import LoginForm from "../components/loginForm";

describe("SearchForm", () => {
    it("Login Auto Focus", () => {
        render(<LoginForm />);

        const heading = screen.getByRole("textbox");

        expect(heading).toHaveFocus();
    });
});
