import { render } from "@testing-library/react";
import React from "react";
import Post from "../../src/pages/posts/[date]";
import mockSchema from "../fixtures/schema.json";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const stateSetter: React.Dispatch<unknown> = jest.fn();

describe("<[pid]/>", () => {
  it("Should render image content", () => {
    useRouter.mockImplementation(() => ({
      query: { pid: mockSchema[0].date },
    }));

    const { container } = render(
      <Post data={mockSchema} requestData={stateSetter} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should render video content", () => {
    useRouter.mockImplementation(() => ({
      query: { pid: mockSchema[6].date },
    }));

    const { container } = render(
      <Post data={mockSchema} requestData={stateSetter} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should render spinner", () => {
    useRouter.mockImplementation(() => ({
      query: { pid: mockSchema[6].date },
    }));
    const { container } = render(<Post data={[]} requestData={stateSetter} />);

    expect(container).toMatchSnapshot();
  });
});
