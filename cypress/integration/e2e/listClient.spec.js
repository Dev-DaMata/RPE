import {Clients} from "../../pages/Client";
import {User} from '../../pages/Login'

describe('Test listClient', () => { 
    const user = new User();
    const client = new Clients();

    beforeEach(() => {
        user.go()
        user.login()
        client.go()
        client.createClient()
    });

    it('Should filter by client name',()=>{
        client.goListClient()
        client.findNameClient()
    })

    it.only('Should clean the database', () =>{
        client.goListClient()
        client.clearDataBase()
    })
})