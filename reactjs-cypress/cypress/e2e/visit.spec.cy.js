
describe('display data', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays items', () => {
    cy.get('.user-sign-in-form-signin-btn').click()
    cy.url().should('include', '/add-books')

    cy.get('input[name="first_name"]')
      .type("rushit1")
      .should("have.value", "rushit1");

    cy.get('input[name="last_name"]')
      .type("jivani")
      .should("have.value", "jivani");


    cy.get('input[name="email"]')
      .type("rj@gmail.com")
      .should("have.value", "rj@gmail.com");

    cy.get('#onClickAddBtn').click()

    cy.go('back')

    cy.get('.edit-icon')
      .first()
      .click()

    cy.get('input[name="first_name"]').focus().clear();

    cy.get('input[name="first_name"]')
      .type("nirali")
      .should("have.value", "nirali");

    cy.get('input[name="last_name"]').focus().clear();

    cy.get('input[name="last_name"]')
      .type("diyora")
      .should("have.value", "diyora");

    cy.get('#updatebtn').click()

    cy.get('.deleteIcon')
      .first()
      .click()

  })
})