import Login from '../mocks/factories/Login'
const mail = '[name="username"]'
const password = '[name="password"]'
const btn = '[type="submit"]'
const msgSuccess = '.page-title'
const msgFail = 'font > label'
let login = Login.loginData();

class User {
    go() {
        cy.visit('/')
    }

    login() {
        cy.get(mail).type(login.mail)
        cy.get(password).type(login.password)
        cy.get(btn).click()
        cy.get(msgSuccess).should('be.visible')
    }

    loginInvalid() {
        let loginMail = 'teste@teste'
        cy.get(mail).type(loginMail)
        cy.get(password).type(login.password)
        cy.get(btn).click()
        cy.get(msgFail).should('be.visible')
    }
}

export default { User };


				