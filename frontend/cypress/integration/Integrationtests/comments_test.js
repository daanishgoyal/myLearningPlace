it("Comments component display", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Miami", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });
    cy.location("pathname").should("eq", "/teacher/6");
    cy.contains("Comments");
    cy.get(".row > .bg-secondary").contains("Comments");
});
