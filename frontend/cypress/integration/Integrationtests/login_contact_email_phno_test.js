it(" contact details click redirecting to login", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Orlando", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });
    cy.get(".mt-4 > .button").click({ force: true });

    cy.url().should("include", "/login");

    cy.get("#username").type("email_1@gmail.com", { force: true });
    cy.get("#password").type("password_1", { force: true });
    cy.get(".btn").click({ force: true });
    cy.url().should("include", "/teacher/2");
    cy.contains("Contact Details");

    cy.contains("098765432").click({ force: true });
    cy.get("@windowOpen").should("be.called");
    cy.contains("email2@email.com").click({ force: true });
});
