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
const btnFind = '[value="Pesquisar"]'
const fieldName = '[name="j_idt17"]'
const tableName = '.success > :nth-child(1)'
const btnClearDataBase = '[name="j_idt22"]'
const msgDataBaseClear = '#alertMessage > strong'
const btnSeeDetail = ':nth-child(1) > .text-center > .btn-primary'

class Clients {
    go(){
        cy.visit('/incluirCliente')
    }

    goListClient(){
        cy.visit('/listarCliente')
        cy.get(btnFind).click()
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

    findNameClient(){
        cy.get(fieldName)
            .click()    
            .type(client.name)
        cy.get(btnFind).click()
        cy.get(tableName).should('contain.text', client.name)
    }

    clearDataBase(){
        cy.get(btnClearDataBase).click()
        cy.get(msgDataBaseClear).should('be.visible')
    }

    seeDetail(){
        cy.get(btnSeeDetail).click()
        cy.get('.btn-success').should('be.visible')
    }

}export default { Clients }