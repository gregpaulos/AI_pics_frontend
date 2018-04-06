describe("Landing", () => {
  it("succesfully goes to landing page and moves on", () => {
    // visit 'baseUrl'
    cy.visit("http://localhost:3000/");
    cy.contains("Let's Test Our Robot Overlords!");
    cy.contains(
      "They may rule the world soon, but let's see how good they are at recognizing what's in a picture right now."
    );
    cy.title().should("include", "Robot Tester");
    cy.get("button").click();
    cy.url().should("includes", "http://localhost:3000/home");
  });
});

describe("Home", () => {
  it("succesfully goes to home page and moves on", () => {
    cy.visit("http://localhost:3000/home/");
    cy.contains(
      "Let's get started testing out the robots by clicking the button below to get a random photo from the unsplash photography website."
    );
    cy.contains(
      "Disclaimer: this is a RANDOM photo - I have no idea what's going to come back. My apologies if it offends your sensibilities"
    );
    cy.contains(
      "Or for a different option, click one of the boxes on the left."
    );
    cy.get("img").should('have.attr', 'src')

    // Get DOM elements by id
    // cy.get("#query-btn").should("contain", "Button");

    // // Get DOM elements by class
    // cy.get(".query-btn").should("contain", "Button");

    // cy.get("#querying .well>button:first").should("contain", "Button");
    // //              ↲
    // // Use CSS selectors just like jQuery
  });

  //   // search for a div with 'Teachers' caption, and click it
  //   cy.get('a[data-testid="main-link-teachers"]').click();
  //   // check if url have changed
  //   cy.url().should('includes', 'teachers');
  //   cy.contains('more time to teach');
  //   // get Login button and click it
  //   cy.get('button[data-testid="menu-button-login"]').click();
  //   // check if url have changed
  //   cy.url().should('includes', '/login');
  //   // submit inputs and click submit button
  //   cy.get('input[data-testid="login-form-username"]').type('test@email.com');
  //   cy.get('input[data-testid="login-form-password"]').type('password');
  //   cy.get('button[data-testid="login-form-submit"]').click();
  //   // verify that we were redirected
  //   cy.url({ timeout: 3000 }).should('includes', '/c/');
});
