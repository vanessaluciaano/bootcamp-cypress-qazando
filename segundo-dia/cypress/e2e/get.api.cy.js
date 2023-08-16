/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {
        cy.request({
            url: 'https://api.restful-api.dev/objects/3',
            method: 'GET'
        })
        .then((retorno) => {
            expect(retorno.status).equal(200)
            expect(retorno.body.name).equal('Apple iPhone 12 Pro Max')
        })
    })

    it('Buscar dispositivo que não existe', () => {
        cy.request({
            url: 'https://api.restful-api.dev/objects/euzinho',
            method: 'GET',
            failOnStatusCode: false
        })
            .then((retorno) => {
                expect(retorno.status).equal(404)
            })
    })
})