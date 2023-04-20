import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Search } from ".";

describe("Search", () => {
  it("should render correctly", () => {
    render(<Search />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("updates input value on change", async () => {
    render(<Search />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "test");

    expect(input.value).toBe("test");
  });
});
