/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivo', () => {
        cy.request({
            url: 'https://api.restful-api.dev/objects',
            method: 'POST',
            body: 
            {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        })
        .then((retorno) => {
            expect(retorno.status).equal(200)
        })
    })
})