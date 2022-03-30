it(" book appointment click redirect to login", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Miami", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });
    cy.get(".mt-4 > .button").click({ force: true });

    cy.url().should("include", "/login");
});
