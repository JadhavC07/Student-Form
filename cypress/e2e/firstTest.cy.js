describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/registration");
    cy.get('[data-testid="cypress-title"]').should(
      "contain.text",
      "Student Registration"
    );
    cy.get('input[name="studentName"]').type("John Doe");
    cy.get('input[name="fatherName"]').type("John Doe Sr.");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="dob"]').type("2000-01-01");
    cy.get('select[name="course"]').select("Engineering");
    cy.get('select[name="bloodGroup"]').select("A+");
    cy.get('select[name="gender"]').select("Male");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="password"]').type("password123");

    cy.get("form").submit();

    // Assert that the form submission was successful
    cy.contains("Data sent successfully");
  });
});
