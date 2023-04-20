import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ListItem } from ".";

const mockClipboard = {
  writeText: vi.fn(),
};

Object.defineProperty(window.navigator, "clipboard", {
  value: mockClipboard,
});

describe("ListItem", () => {
  it("should render correctly", () => {
    render(<ListItem data="🚀" />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should copy emoji when button is clicked", async () => {
    render(<ListItem data="🚀" />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockClipboard.writeText).toHaveBeenCalledWith("🚀");
  });
});
