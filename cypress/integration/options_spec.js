describe("Options", () => {
    it("succesfully navigates using left side bar", () => {
      cy.visit("http://localhost:3000/home/");
      cy.get('[href="/home/random/step1"] > .Hover-darken > p').click();
      cy.url().should("includes", "http://localhost:3000/home/random/step1");
  
      cy.get('[href="/home/upload/getphoto"] > .Hover-darken > h1').click();
      cy.url().should("includes", "http://localhost:3000/home/upload/getphoto");
  
      cy.get('[href="/home/others/all"] > .Hover-darken > h1').click();
      cy.url().should("includes", "http://localhost:3000/home/others/all");
    });
  });