import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const RenderComp = () => <main>Hello</main>;

describe("Home", () => {
  it("renders a main", () => {
    render(<RenderComp />);

    const heading = screen.getByRole("main");

    expect(heading).toBeInTheDocument();
  });
});
