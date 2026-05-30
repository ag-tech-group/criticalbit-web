import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithFileRoutes } from "@/test/renderers"

describe("HomePage", () => {
  it("renders the site name", async () => {
    await renderWithFileRoutes(<></>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /criticalbit\.gg/i
    )
  })

  it("links The King's Gauntlet to the aoe2 tournament path", async () => {
    await renderWithFileRoutes(<></>)
    expect(
      screen.getByRole("link", { name: /king's gauntlet/i })
    ).toHaveAttribute("href", "https://aoe2.criticalbit.gg/kings-gauntlet")
  })

  it("credits Hera as host of The King's Gauntlet", async () => {
    await renderWithFileRoutes(<></>)
    expect(
      screen.getByRole("link", { name: /king's gauntlet/i })
    ).toHaveTextContent(/hosted by hera/i)
  })

  it("orders The King's Gauntlet above Vagrant Story in the menu", async () => {
    await renderWithFileRoutes(<></>)
    const gauntlet = screen.getByRole("link", { name: /king's gauntlet/i })
    const vagrant = screen.getByRole("link", { name: /vagrant story/i })
    // bit 4 (DOCUMENT_POSITION_FOLLOWING) set => vagrant comes after gauntlet
    expect(
      gauntlet.compareDocumentPosition(vagrant) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })
})
