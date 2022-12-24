import { Content } from './content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      recipientId: '123',
      category: 'social'
    });
    expect(notification).toBeTruthy();
  });
});
