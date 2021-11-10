describe("Home", () => {
  it("Should display Login button when user is not logged in", () => {
    cy.visit("/");
    cy.get('a[test-data="go-to-login-button"]').should(
      "have.length.greaterThan",
      0
    );
  });
});
