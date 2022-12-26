import { CountRecipientNotifications } from './count-recipient-notifications';
import { Notification } from './../entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Content } from '@application/entities/content';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'recipient-1'
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade 2'),
        recipientId: 'recipient-1'
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade 2'),
        recipientId: 'recipient-2'
      })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });

    expect(count).toEqual(2);

  });
});