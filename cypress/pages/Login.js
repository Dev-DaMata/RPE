import Login from '../mocks/factories/Login'
const mail = '[name="username"]'
const password = '[name="password"]'
const btn = '[type="submit"]'

let login = Login.loginData();

class User {
    go() {
        cy.visit('/')
    }

    login() {
        cy.get(mail).type(login.mail)
        cy.get(password).type(login.password)
        cy.get(btn).click()
    }
}

export default { User };
