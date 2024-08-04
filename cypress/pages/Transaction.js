import Transaction from '../mocks/factories/Transaction'
import Client from "../mocks/factories/client"; 
let client = Client.clientData();
let transaction = Transaction.transactionData()
const clientName = '[id="cliente"]'
const balance = '[id="valorTransacao"]'
const btnSave = '[id="botaoSalvar"]'
const btnCanceled = '[class="btn btn-danger"]'
const findNameClient = '[value="Pesquisar"]'
const btnFind = '[name="j_idt20"]'
const btnSeeDetail = ':nth-child(1) > .text-center > .btn-primary'

class Transactions {
    go(){
        cy.visit('/incluirVenda')
    }

    goList() {
        cy.visit('/listarVenda')
        cy.get(btnFind).click()
    }

    createTransaction(){
        cy.get(clientName).select(client.name)
        cy.get(balance).type(transaction.balance)
        cy.get(btnSave).click()
    }

    createUnnamedTransaction() {
        cy.get(balance).type(transaction.balance)
        cy.get(btnSave).click()
    }

    canceledTransation(){
        cy.get(balance).type(transaction.balance)
        cy.get(btnCanceled).click()
        cy.get(findNameClient).should('be.visible')
    }

    seeDetail(){
        cy.get(btnSeeDetail).click()
        cy.get(btnCanceled).should('be.visible')
    }
}export default {Transactions}