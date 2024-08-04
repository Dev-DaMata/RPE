import Client from "../mocks/factories/client"; 
let client = Client.clientData();
const name = '[id="nome"]'
const cpf = '[id="cpf"]'
const active = '[id="status"]'
const balance = '[id="saldoCliente"]'
const btnSave = '[id="botaoSalvar"]'
const msgSuccess = 'strong'
const msgFailName = '[data-bv-for="nome"]'
const msgFailCpf = '[data-bv-for="cpf"]'
const btnCanceled = '[class="btn btn-danger"]'

class addClient {
    go(){
        cy.visit('/incluirCliente')
    }

    createClient() {
        cy.get(name).type(client.name)
        cy.get(cpf).type(client.cpf)
        cy.get(active).select('Ativo')
        cy.get(balance).type(client.balance)
        cy.get(btnSave).click()
        cy.get(msgSuccess).should('be.visible')
    }

    createUnnamedClient(){
        cy.get(cpf).type(client.cpf)
        cy.get(active).select('Ativo')
        cy.get(balance).type(client.balance)
        cy.get(btnSave).click()
        cy.get(msgFailName).should('be.visible')
    }

    createClietNoCpf(){
        cy.get(name).type(client.name)
        cy.get(active).select('Ativo')
        cy.get(balance).type(client.balance)
        cy.get(btnSave).click()
        cy.get(msgFailCpf).should('be.visible')
    }

    clientCanceled(){
        cy.get(name).type(client.name)
        cy.get(cpf).type(client.cpf)
        cy.get(active).select('Ativo')
        cy.get(balance).type(client.balance)
        cy.get(btnCanceled).click()
        cy.get(':nth-child(2) > .col > strong').should('be.visible')
    }
}export default { addClient }