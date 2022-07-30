import {render, screen} from "@testing-library/react";
import NotFoundPage from "@/pages/404/index";

test("Should display the 404 Not found Page correctly", ()=>{
  render(<NotFoundPage/>);

  const goHomeBtn = screen.getByRole("button", {
    name: /Go Home/
  });

  expect(goHomeBtn).toBeInTheDocument();
});