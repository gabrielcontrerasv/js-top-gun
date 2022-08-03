import { fireEvent, render, screen } from "@testing-library/react";
import ErrorFormMsg from "../../../components/ErrorFormMsg/ErrorFormMsg";

describe("ErrorFormMsg", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<ErrorFormMsg />);
    expect(wrapper).toMatchSnapshot();
  });
});