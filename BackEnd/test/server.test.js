const request = require('supertest');
const app = require('../index');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

const mongoose = require('mongoose');

describe('MongoDB Connection', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();

  });

  it('connects to the MongoDB database', async () => {
    const connection = mongoose.connection;
    expect(connection.readyState).toBe(1);
  });
});

describe('POST /register', () => {
  it('Should register a new user', async () => {
      const res = await request(app)
      .post('/api/register')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        role: 'admin',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('err', 'NOT able to save user in DB');
    });
});