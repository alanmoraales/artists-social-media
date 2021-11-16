describe("User", () => {
  it("should be able to login with its account", () => {
    cy.visit("/");
    cy.get('a[test-data="go-to-login-button"]').click();
    cy.wait(500);
    cy.get("#username").type("alanmoraales");
    cy.get("#password").type("12345678");
    cy.get("#login-form").submit();
    cy.wait(500);
    cy.get("#logout-button").should("exist");
  });

  it("should be able to logout from its account", () => {
    cy.visit("/");
    cy.get('a[test-data="go-to-login-button"]').click();
    cy.wait(500);
    cy.get("#username").type("alanmoraales");
    cy.get("#password").type("12345678");
    cy.get("#login-form").submit();
    cy.wait(500);
    cy.get("#logout-button").click();
    cy.wait(500);
    cy.get('a[test-data="go-to-login-button"]').should("exist");
  });
});
