it("  contact details button redirect to login  page", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Ocala", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });
    cy.get(".card-specific > :nth-child(1)").click({ force: true });

    cy.url().should("include", "/login");
});
