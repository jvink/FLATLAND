describe("Navigation", () => {
  it("should navigate to the contact page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "contact" and click it
    cy.get('a[href*="contact"]').click();

    // The new url should include "/contact"
    cy.url().should("include", "/contact");

    // The new page should contain an h1 with "contact page"
    cy.get("h1").contains("contact page");
  });
});
