import {Clients} from "../../pages/Client";
import {User} from '../../pages/Login'
import {Transactions} from'../../pages/Transaction'
describe('Test add Transaction', () => { 
    const user = new User();
    const client = new Clients();
    const transaction = new Transactions();

    beforeEach(() => {
        user.go()
        user.login()
        client.go()
        client.createClient()
        transaction.go()
    });

    it('Should create a transaction', ()=>{
        transaction.createTransaction()
    })

    it('Should not create a transation without the costumers name', () => {
        transaction.createUnnamedTransaction()
    })
})