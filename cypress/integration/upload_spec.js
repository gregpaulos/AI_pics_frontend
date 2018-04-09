describe("Upload Route", () => {
    it("succesfully goes through upload route", () => {
      cy.visit("http://localhost:3000/home/upload/getphoto");
      cy.contains("Choose an image to upload (PNG, JPG)");
      cy.contains(
        "Please DO NOT put anything offensive up here. You know what I'm talking about."
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
  
        // cy.fixture('bonzo.jpg').as('bonzo')
        // .get('input[type=file]').then(function(el) {
        //   return Cypress.Blob.base64StringToBlob(this.bonzo, 'image/jpg')
        //     .then(blob => {
        //       el[0].files[0] = blob
        //       el[0].dispatchEvent(new Event('change', {bubbles: true}))
        //     })
        // })
  
        // cy.fixture('bonzo.jpg').as('bonzo')
        // // cy.get('input[type=file]').trigger('change', {force: true, data: bonzo})
        // cy.get("input[type=file]").then(function($el) {
        
        //   // convert the logo base64 string to a blob
        //   return Cypress.Blob.base64StringToBlob(this.bonzo, "image/jpg").then((blob) => {
          
        //     console.log(blob)
        //     // pass the blob to the fileupload jQuery plugin
        //     // used in your application's code
        //     // which initiates a programmatic upload
            
        //     $el.trigger('change', {force: true, data: blob})
        //     // el.fileupload("add", { files: blob })
        //   })
        // })
  
      // cy.fixture("bonzo.jpg", "binary").then(bonzo => {
      //   cy.get("#image_uploads").then($input => {
      //     $input.fileupload("add", { files: bonzo });
      //   });
      // });
    });
  });
  