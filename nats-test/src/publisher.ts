import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';
// stan or client
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});
console.clear();

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed!!!');
    process.exit();
  });
  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: 'jisdfjsdif',
      title: 'Test',
      price: 30,
    });
  } catch (e) {
    console.error(e);
  }
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
