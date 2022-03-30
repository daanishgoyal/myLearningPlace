import { render } from "@testing-library/react";
import TeacherSpecificDetails from "../components/teachers/TeacherSpecificDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { searchTeachers } from "../services/searchService";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    container.remove();
    container = null;
});

test("teacher specific page loading", async () => {
    const { data: teachers } = await searchTeachers({
        city: "Orlando",
        skill: "Yoga",
    });
    const teacher = teachers.find(myFunction);
    function myFunction(value) {
        return value.ID === 2;
    }
    const { result } = render(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/teacher/2"
                    element={
                        <TeacherSpecificDetails
                            state={{ teacherData: teacher }}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>,
        container
    );
    expect(result).toMatchSnapshot();
});
