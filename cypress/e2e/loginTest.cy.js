describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:5173/");
     it("should log in with valid credentials", () => {
       // Fill in the login form
       cy.get('input[name="email"]').type("admin123@h.com");
       cy.get('input[name="password"]').type("skduhuifhwe");

       // Submit the form
       cy.get('button[type="submit"]').click();

       // Assert that the login was successful (update the assertion based on your application behavior)
       cy.url().should("include", "/dashboard");
     });

     it("should navigate to the registration page", () => {
       // Click on the Registration link
       cy.get('a[href="/registration"]').click();

       // Assert that the URL has changed to the registration page
       cy.url().should("include", "/registration");
     });
  })
})