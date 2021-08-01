import { render, screen } from "src/test-utils";
import { MainLayout } from "src/components/layout/main-layout";

describe("Layout tests", () => {
  it("should render children", async () => {
    render(
      <MainLayout>
        <div role="article">Hello</div>
      </MainLayout>
    );
    const appContent = screen.getByRole("article");
    expect(appContent).toHaveTextContent("Hello");
  });
});
