it(" cancel Booking feature ", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#username").type("email_1@gmail.com", { force: true });
    cy.get("#password").type("password_1", { force: true });
    cy.get(".btn").click({ force: true });

    cy.url().should("include", "/");
    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Miami", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.get(".container-fluid > .nav-item > .nav-link").click({ force: true });
    cy.get(":nth-child(1) > .dropdown-item").click({ force: true });
    cy.contains("Welcome");
    cy.contains("Profile Information");
    cy.contains("Booking History");
    cy.url().should("include", "/bookingHistory");

    cy.get(':nth-child(1) > [align="right"] > .btn').click({ force: true });
    cy.contains("Are you sure you want to cancel your appointment on");

    cy.get(
        ":nth-child(6) > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)"
    ).click({ force: true });
    cy.url().should("include", "/");
});
