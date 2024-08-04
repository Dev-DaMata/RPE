import {addClient} from "../../pages/Client";
import {User} from '../../pages/Login'

describe('Client test', () => {
    const user = new User();
    const client = new addClient();
    beforeEach(() => {
        user.go()
        user.login()
    });

    it('Should created a client', ()=>{
        client.go()
        client.createClient()
    })

    it('Should not create a client without a name',()=>{
        client.go()
        client.createUnnamedClient()
    })

    it('Should not create a client without a CPF', () => {
        client.go()
        client.createClietNoCpf()
    })
})