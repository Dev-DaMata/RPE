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
        client.goListClient()
    });

    it('Should filter by client name',()=>{
        client.findNameClient()
    })

    it('Should clean the database', () =>{
        client.clearDataBase()
    })

    it('Should see customer breakdown', () => {
        client.seeDetail()
    })
})