import {render, screen} from "@testing-library/react";
import NotFoundPage from "@/pages/[notFound]/index";

test("Should display the 404 Not found Page correctly", ()=>{
  render(<NotFoundPage/>);

  const goHomeBtn = screen.getByRole("button", {
    name: /go home/i
  });

  expect(goHomeBtn).toBeInTheDocument();
});