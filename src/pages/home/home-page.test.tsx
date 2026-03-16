import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithFileRoutes } from "@/test/renderers"

describe("HomePage", () => {
  it("renders the site name", async () => {
    await renderWithFileRoutes(<></>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "CriticalBit"
    )
  })
})
