import { render } from "@testing-library/react"
import React from "react"
import Post from "../../src/pages/posts/[date]"
import mockSchema from "../fixtures/schema.json"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    }
  },
}))

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("<[date]/>", () => {
  it("Should render image content", () => {
    useRouter.mockImplementation(() => ({
      query: { date: mockSchema[0].date },
    }))

    const { container } = render(<Post post={mockSchema[0]} />)

    expect(container).toMatchSnapshot()
  })

  it("Should render video content", () => {
    useRouter.mockImplementation(() => ({
      query: { date: mockSchema[6].date },
    }))

    const { container } = render(<Post post={mockSchema[0]} />)

    expect(container).toMatchSnapshot()
  })
})
