import {Clients} from "../../pages/Client";
import {User} from '../../pages/Login'
import {Transactions} from'../../pages/Transaction'

describe('Test list transaction', ()=> {
    const user = new User();
    const client = new Clients();
    const transaction = new Transactions();

    beforeEach(() => {
        user.go()
        user.login()
        client.go()
        client.createClient()
        transaction.go()
        transaction.createTransaction()
        transaction.goList()
    });

    it('Should open the transaction details page', ()=> {
        transaction.seeDetail()
    })
})