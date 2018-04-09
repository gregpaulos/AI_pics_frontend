// HITS RATE LIMITED API SO BE CAREFUL
describe("Random Route", () => {
  it("succesfully goes through random route", () => {
    cy.visit("http://localhost:3000/home/random/step1");
    cy.contains(
      "Click the button below to get a random photo from the unsplash photography website."
    );
    cy.contains(
      "Disclaimer: this is a RANDOM photo - I have no idea what's going to come back. My apologies if it offends your sensibilities"
    );
    cy.contains(
      "Or for a different option, click one of the boxes on the left."
    );
    cy.get('.App-logo');
    cy.get('[href="/home/random/step1"] > .Hover-darken > h1')
    cy.get('[href="/home/random/step1"] > .Hover-darken > p').should('contain', 'Try a Random Photo' )
    cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1')
    cy.get('[href="/home/upload/getphoto"] > .Hover-darken > p').should('contain', 'Upload Your Own Photo' )
    cy.get('[href="/home/others/all"] > .Hover-darken > h1')
    cy.get('[href="/home/others/all"] > .Hover-darken > p').should('contain', 'See What Other People Have Done' )
    cy.get("button").click();
    cy.url().should("includes", "http://localhost:3000/home/random/step2");
    cy.get(':nth-child(1) > div > img');
    cy.get(':nth-child(1) > :nth-child(1) > img');
    cy.get('[href="/home/random/step1"] > .Hover-darken > h1')
    cy.get('[href="/home/random/step1"] > .Hover-darken > p').should('contain', 'Try a Random Photo' )
    cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1')
    cy.get('[href="/home/upload/getphoto"] > .Hover-darken > p').should('contain', 'Upload Your Own Photo' )
    cy.get('[href="/home/others/all"] > .Hover-darken > h1')
    cy.get('[href="/home/others/all"] > .Hover-darken > p').should('contain', 'See What Other People Have Done' )
    cy.get("button").click();
    cy.url().should("includes", "http://localhost:3000/home/random/step3");
    cy.get(':nth-child(1) > :nth-child(1) > img')
    cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(1)').should('contain', 'Google' )
    cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(2)').should('contain', 'Clarifai' )
    cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(3)').should('contain', 'Watson' )

  });
});