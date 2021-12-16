

describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

const nameInput = () => cy.get('input[name=name]');
const emailInput = () => cy.get('input[name=email]');
const passwordInput = () => cy.get('input[name=password]');

// sanity checks
expect(1+2).to.equal(3);

it('proper elements are showing', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
})

})