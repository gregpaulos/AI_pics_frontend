describe("Other Peoples/All Route", () => {
    it("succesfully goes through others/all route", () => {
      cy.visit("http://localhost:3000/home/others/all");
      cy.get('.App-logo');
      cy.get('[href="/home/random/step1"] > .Hover-darken > h1')
      cy.get('[href="/home/random/step1"] > .Hover-darken > p').should('contain', 'Try a Random Photo' )
      cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1')
      cy.get('[href="/home/upload/getphoto"] > .Hover-darken > p').should('contain', 'Upload Your Own Photo' )
      cy.get('[href="/home/others/all"] > .Hover-darken > h1')
      cy.get('[href="/home/others/all"] > .Hover-darken > p').should('contain', 'See What Other People Have Done' )
      cy.get('[href="/home/others/individual/1"] > .Hover-cards > img').click()
      cy.url().should("includes", "http://localhost:3000/home/others/individual/1");
      cy.get(':nth-child(1) > :nth-child(1) > img');
      cy.get('[href="/home/random/step1"] > .Hover-darken > h1')
      cy.get('[href="/home/random/step1"] > .Hover-darken > p').should('contain', 'Try a Random Photo' )
      cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1')
      cy.get('[href="/home/upload/getphoto"] > .Hover-darken > p').should('contain', 'Upload Your Own Photo' )
      cy.get('[href="/home/others/all"] > .Hover-darken > h1')
      cy.get('[href="/home/others/all"] > .Hover-darken > p').should('contain', 'See What Other People Have Done' )
      cy.get(':nth-child(1) > :nth-child(1) > img')
      cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(1)')
      .should('contain', 'Google' )
      cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(2)')
      .should('contain', 'Clarifai' )
      cy.get('[style="display: flex; flex-wrap: wrap; justify-content: center;"] > :nth-child(3)')
      .should('contain', 'Watson' )
  
  
    });
  });
  