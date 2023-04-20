import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "@/pages";

const emojiList = [
  { slug: "alien", unicodeName: "alien", character: "👽" },
  { slug: "pile-of-poo", unicodeName: "pile of poo", character: "💩" },
  { slug: "ghost", unicodeName: "ghost", character: "👻" },
];

describe("Home", () => {
  it("should render correctly", async () => {
    render(<Home emojiList={emojiList} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });

  it("should be able filter list", async () => {
    render(<Home emojiList={emojiList} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "ghost");

    expect(await screen.findAllByRole("listitem")).toHaveLength(1);
  });

  it("loads initial data", async () => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(emojiList),
      } as any);
    });

    const response = await getStaticProps();

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          emojiList,
        },
      })
    );
  });
});
