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
    cy.get(".App-logo");
    cy.get('[href="/home/random/step1"] > .Hover-darken > h1');
    cy
      .get('[href="/home/random/step1"] > .Hover-darken > p')
      .should("contain", "Try a Random Photo");
    cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1');
    cy
      .get('[href="/home/upload/getphoto"] > .Hover-darken > p')
      .should("contain", "Upload Your Own Photo");
    cy.get('[href="/home/others/all"] > .Hover-darken > h1');
    cy
      .get('[href="/home/others/all"] > .Hover-darken > p')
      .should("contain", "See What Other People Have Done");
    cy.get("button")
  });
});
