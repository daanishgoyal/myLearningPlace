it(" cancel Booking feature ", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#username").type("email_1@gmail.com", { force: true });
    cy.get("#password").type("password_1", { force: true });
    cy.get(".btn").click({ force: true });

    cy.url().should("include", "/");
    cy.get("#skill").select("Yoga", { force: true });
    cy.get("#city").select("Ocala", { force: true });
    cy.get(".btn").click({ force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.location("pathname").should("eq", "/teachers", { force: true });
    cy.contains("More Info").click({ force: true });

    cy.contains("Book Appointment");
    cy.get(".mt-4 > :nth-child(1) > .button").click({ force: true });
    cy.get(".form-control").type(
        "Hi, I need special focus on pilates training alosng with yoga",
        { force: true }
    );
    cy.contains("Confirm Booking");
    cy.get("body").click({ force: true });
    cy.contains("Recently Booked Appointment Details");
});
