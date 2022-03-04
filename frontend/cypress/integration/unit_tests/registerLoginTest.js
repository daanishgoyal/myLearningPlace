it("register and login user", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("#email").type("hihello@gmail.com", { force: true });
    cy.get("#password").type("12345678", { force: true });
    cy.get("#firstName").type("yalla", { force: true });
    cy.get("#lastName").type("nand", { force: true });

    cy.get(".btn").click({ force: true });

    cy.get("#username").type("hihello@gmail.com", { force: true });
    cy.get("#password").type("12345678", { force: true });

    cy.get(".btn").click({ force: true });

    cy.url().should("include", "/");
});
