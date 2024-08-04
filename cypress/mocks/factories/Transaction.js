import { faker } from '@faker-js/faker';
const randomBalance = faker.number.float({ min: 10, max: 100, fractionDigits: 3 })

export default {
    transactionData() {
        let data = {
            balance: randomBalance
        };
        return data
    }
}