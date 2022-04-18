it(" book appointment click redirecting to login", () => {
    cy.visit("http://localhost:3000");

    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Miami", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });
    cy.get(".mt-4 > .button").click({ force: true });

    cy.url().should("include", "/login");

    cy.get("#username").type("email_1@gmail.com", { force: true });
    cy.get("#password").type("password_1", { force: true });
    cy.get(".btn").click({ force: true });
    cy.url().should("include", "/teacher/6");
    // cy.contains("Book Appointment");
    // cy.get(".mt-4 > :nth-child(1) > .button").click();
    // cy.contains("Select Day");
    // cy.contains("Select Slot");
    // cy.contains("Confirm Booking");
    // cy.get(".modal-footer > .btn").click();
    cy.contains("Recently Booked Appointment Details");
    cy.contains("Date");
    cy.contains("Skill");
    cy.contains("Slot");
});
