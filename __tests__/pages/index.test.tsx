import { render } from "@testing-library/react";
import React from "react";
import Home from "../../src/pages/index";
import mockSchema from "../fixtures/schema.json";

const stateSetter: React.Dispatch<unknown> = jest.fn();

describe("<Home/>", () => {
  it("Should render content", () => {
    const { container } = render(
      <Home data={mockSchema} requestData={stateSetter} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should render spinner", () => {
    const { container } = render(<Home data={[]} requestData={stateSetter} />);

    expect(container).toMatchSnapshot();
  });
});
