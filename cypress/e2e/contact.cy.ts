/// <reference types="cypress" />

describe("Contact form", () => {
  it("submits successfully", () => {
    cy.visit("/contact");
    cy.get("input[name='name']").type("Pedro");
    cy.get("input[name='email']").type("pedro@example.com");
    cy.get("textarea[name='message']").type("Hello!");
    cy.get("form").submit();
    cy.contains("Message sent successfully!").should("be.visible");
  });
});