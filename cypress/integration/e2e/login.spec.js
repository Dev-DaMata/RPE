import {User} from '../../pages/Login'

describe('Login test', () => { 
    const user = new User();

    it('Should log in',()=>{
        user.go()
        user.login()
    })

    it('Should not log in with an invalid account', ()=>{
        user.go()
        user.loginInvalid()
    })
})