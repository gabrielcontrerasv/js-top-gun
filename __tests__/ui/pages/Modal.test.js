import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../../../components/UI/Modal";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Modal", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<Modal />);

    expect(wrapper).toMatchSnapshot();
  });

});