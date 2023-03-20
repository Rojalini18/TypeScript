import Country from "../Pages/Country";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Country", () => {
    test('Should return data for India', async () => {
        const api = await fetch('https://restcountries.com/v2/name/India?fullText=true');
        const ans = await api.json();
        expect(ans[0].name).toBe('India')
    })

    test("Should find button by testId", () => {
        render(
            <Router>
                <Country />
            </Router>
        );
        const testId = "submitButton";
        const button = screen.getByTestId(testId);
        expect(button).toBeTruthy();
    });

    test('Should find the button title', () => {
        render(
            <Router>
                <Country />
            </Router>
        );
        const heading = 'Capital';
        const foundHeading = screen.getAllByText(heading);
        expect(foundHeading).toBeTruthy();
    });
})