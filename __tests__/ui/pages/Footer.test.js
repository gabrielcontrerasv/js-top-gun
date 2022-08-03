import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../../../components/Footer/Footer";

describe("Footer", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});