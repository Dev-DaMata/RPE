import Transaction from '../mocks/factories/Transaction'
import Client from "../mocks/factories/client"; 
let client = Client.clientData();
let transaction = Transaction.transactionData()
const clientName = '#cliente'
const balance = '[id="valorTransacao"]'
const btnSave = '[id="botaoSalvar"]'
const btnCanceled = '[class="btn btn-danger"]'
const findNameClient = '[value="Pesquisar"]'

class Transactions {
    go(){
        cy.visit('/incluirVenda')
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
        cy.get(clientName).select(client.name)
        cy.get(balance).type(transaction.balance)
        cy.get(btnCanceled).click()
        cy.get(findNameClient).should('be.visible')
    }
}export default {Transactions}