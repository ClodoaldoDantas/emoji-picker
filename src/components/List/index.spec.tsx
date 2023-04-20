import { render, screen } from "@testing-library/react";
import { List } from ".";

describe("List", () => {
  it("should render correctly", () => {
    render(<List>list content</List>);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
