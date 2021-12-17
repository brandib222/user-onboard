

describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

const nameInput = () => cy.get('input[name=name]');
const emailInput = () => cy.get('input[name=email]');
const passwordInput = () => cy.get('input[name=password]');
const termsInput = () => cy.get('input[name=terms');
const submitInput = () => cy.get('input[id=submit]');
const grandmaRunOverByAReindeerInput = () => cy.get('input[name=reindeer]');

// sanity checks
expect(1+2).to.equal(3);

it('proper elements are showing', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    grandmaRunOverByAReindeerInput().should('not.exist')
})

it('can type in the inputs', () => {
    nameInput()
        .should('have.value', '')
        .type('Your name not reindeer')
        .should('have.value', 'Your name not reindeer')

    emailInput()
        .should('have.value', '')
        .type('Santa@northpole.com')
        .should('have.value', 'Santa@northpole.com')

    passwordInput()
        .should('have.value', '')
        .type('cookies234')
        .should('have.value', 'cookies234')
})

it('can click on the terms', () => {
    termsInput().click();
})

it('can click submit when everything is filled out', () => {
    nameInput().type('You better watch out');
    emailInput().type('You better not cry');
    passwordInput().type('You better watch out');
    submitInput().should('not.be.disabled');
})

})