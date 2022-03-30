it("search navitation to teacher specific page", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Miami", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers");
    cy.contains("More Info").click({ force: true });
    cy.location("pathname").should("eq", "/teacher/6");
    cy.get("h4") // 9.
        .should("contain", "Education");
    cy.get(".d-inline-block").click({ force: true });
    cy.url().should("include", "http://localhost:3000");
});
