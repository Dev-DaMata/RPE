import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf';
const randomName = faker.person.firstName()
const randomCpf = generate();
const randomBalance = faker.number.float({ min: 10, max: 100, fractionDigits: 3 })

export default {
    clientData() {
        let data = {
            name : randomName,
            cpf: randomCpf,
            balance: randomBalance,
        };
        return data
    }
}