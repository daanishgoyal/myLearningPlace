it("contact to login page", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga");
    cy.get("#city").select("Ocala");
    cy.get(".btn").click();
    cy.location("pathname").should("eq", "/teachers");
    cy.contains("More Info").click({ force: true });
    cy.location("pathname").should("eq", "/teacher/4");
    cy.get(".button-card > :nth-child(1)").click({ force: true });
    cy.url().should("include", "/login");
});
