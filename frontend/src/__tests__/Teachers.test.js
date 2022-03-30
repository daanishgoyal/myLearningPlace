import { render } from "@testing-library/react";
import Teachers from "../components/teachers/Teachers.component";

it("teacher page comes or not", () => {
    const { container } = render(<Teachers />);
    expect(container).toMatchSnapshot();
});
