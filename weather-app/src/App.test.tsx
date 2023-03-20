import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home"

test("renders learn react link", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const getText = screen.getByText("Weather App!");
  expect(getText).toBeTruthy();
})
