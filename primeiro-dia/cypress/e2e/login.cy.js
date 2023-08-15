/// <reference types="cypress"/>

//feature
describe('Login', () => {
    
    //cenarios
    it('Login com sucesso', () => {
        //Visita site
        cy.visit('/login')
       
        //Preenche o campo login
        cy.get('#user').type('vanessa.luciano@tst.com')

        //Preenche o campo senha
        cy.get('#password').type('123456')

        //Clica no botão Login
        cy.get('#btnLogin').click()

        //Verifican
        cy.url().should('include', 'my-account')

    })

})

