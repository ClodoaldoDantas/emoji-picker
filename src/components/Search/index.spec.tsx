import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from ".";

describe("Search", () => {
  it("should render correctly", () => {
    render(<Search />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(<Search />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
