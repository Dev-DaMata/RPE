import {User} from '../../pages/Login'

describe('Test', () => { 
    const user = new User();

    it('teste',()=>{
        user.go()
        user.login()
    })
})