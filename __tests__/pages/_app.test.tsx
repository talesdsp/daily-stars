import { act, render } from "@testing-library/react";
import React from "react";
import Home from "../../src/pages";
import App from "../../src/pages/_app";
import mockSchema from "../fixtures/schema.json";

declare let global: { fetch: jest.Mock<any, any> };

global.fetch = jest
  .fn()
  .mockImplementation((p) =>
    Promise.resolve({ json: () => Promise.resolve(mockSchema[0]) })
  );

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

const setState: React.Dispatch<Post[]> = jest.fn();
const useStateMock = (initState: Post[]) => [initState, setState];

describe("<App/>", () => {
  beforeEach(async () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    /// @ts-ignore
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    act(() => {
      render(<App Component={Home} pageProps={{}} />);
    });
  });

  it("Should fetch content", async () => {
    expect(setState).toHaveBeenCalledWith(
      [...Array(7)].map(() => mockSchema[0])
    );
  });
});
