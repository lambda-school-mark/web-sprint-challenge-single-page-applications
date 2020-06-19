describe("Get name and input", () => {
  it("visits site", () => {
    cy.visit("http://localhost:3000/pizza");

    cy.get("input#name").type("Broski").should("have.value", "Broski");
  });

  it("test that you can select multiple toppings", () => {
    cy.get("input#topping1").check();
    cy.get("input#topping2").check();
    cy.get("input#topping3").check();
    cy.get("input#topping4").check();
  });

  it("test that you can submit the form", () => {
    cy.get("form#submit").submit();
  });
});
