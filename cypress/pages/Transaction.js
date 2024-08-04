import Transaction from '../mocks/factories/Transaction'
import Client from "../mocks/factories/client"; 
let client = Client.clientData();
let transaction = Transaction.transactionData()
const clientName = '#cliente'
const balance = '[id="valorTransacao"]'
const btnSave = '[id="botaoSalvar"]'
const msgSuccess = 'strong'

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
}export default {Transactions}