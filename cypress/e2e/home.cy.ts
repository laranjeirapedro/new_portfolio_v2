describe("Homepage E2E", () => {
  it("should display portfolio title and navbar", () => {
    cy.visit("/");
    cy.contains("Pedro Magalhaes").should("be.visible");
  });
});