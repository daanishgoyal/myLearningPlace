import { render, screen } from "@testing-library/react";
import ContactDetails from "../components/teachers/ContactDetails";
import auth from "../services/authService";

test("renders booking history cancel cancel appointment or not", async () => {
    await auth.login("email_1@gmail.com", "password_1");
    render(<ContactDetails />);
    const { container } = render(<ContactDetails />);
    expect(container).toMatchSnapshot();
});
