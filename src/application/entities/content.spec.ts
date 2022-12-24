import { Content } from './content';
test('it should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma solicitação de amizade');
  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with last than 5 characters', () => {
  expect(() => {
    new Content('1234');
  }).toThrow();
});

test('it should not be able to create a notification content with more than 240 characters', () => {
  expect(() => {
    new Content('3'.repeat(241));
  }).toThrow();
});
