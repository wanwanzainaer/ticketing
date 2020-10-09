import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: '12345678' })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '12345678' })
    .expect(201);
  await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: '123478' })
    .expect(400);
});

it('Successful when user input the correct email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '12345678' })
    .expect(201);
  const response = await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: '12345678' })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
});

// it('returns a 201 on successful signup', async () => {
//   return request(app)
//     .post('/api/users/signup')
//     .send({ email: 'test@test.com', password: '12345678' })
//     .expect(201);
// });
