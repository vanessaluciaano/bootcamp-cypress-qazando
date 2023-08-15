/// <reference types="cypress"/>

it('Assinar news', () => {
    //Acessar o site - tela de HOME
    cy.visit('/')

    //Realiza assinatura
    cy.get('.form-control').type('vanessa.luciano@test.com{enter}')
})