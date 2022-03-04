it("login user", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#username").type("hihello@gmail.com", { force: true });
    cy.get("#password").type("12345678", { force: true });
    cy.get(".btn").click({ force: true });

    cy.url().should("include", "/");
});
