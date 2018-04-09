describe("Landing", () => {
    it("succesfully goes to landing page and moves on", () => {
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