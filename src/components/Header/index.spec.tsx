import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);
    expect(screen.getByText("✂️ Emoji Picker")).toBeInTheDocument();
    expect(
      screen.getByText("Search for your favorite emojis and share more easily")
    ).toBeInTheDocument();
  });
});
