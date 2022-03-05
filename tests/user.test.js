const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

beforeEach(async () => {
    await User.deleteMany()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'M',
        email: 'zaklas@centrum.cz',
        password: 'test2020'
    }).expect(201)
})
