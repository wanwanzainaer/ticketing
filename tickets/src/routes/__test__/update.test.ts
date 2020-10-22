import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('return 404 if the provide id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', global.signin())
    .send({ title: 'sdf', price: 20 })
    .expect(404);
});

it('return 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: 'sdf', price: 20 })
    .expect(401);
});

it('return 401 if the user does not own the ticket', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'test', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({ title: 'sdfasdfasdf', price: 1000 })
    .expect(401);
});

it('return 400 if the user provide invalid title or price', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'test', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({ price: 1000 })
    .expect(400);
});

it('Update the tickets provided valid input', async () => {});
