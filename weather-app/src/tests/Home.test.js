import Home from "../Pages/Home";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home",()=>
{
  test("Should find button by testId",()=>
  {
    render(
      <Router>
        <Home />
      </Router>
    );
    const testId="submitButton";
    const button=screen.getByTestId(testId);
    expect(button).toBeTruthy();
  });
  test('Should find the input field via testId', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const testId = 'inputField';
    const input = screen.getByTestId(testId);
    expect(input).toBeTruthy();
  });
  test('Should find the button title', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const text = 'Submit';
    const title = screen.getAllByText(text);
    expect(title).toBeTruthy();
  });
})

