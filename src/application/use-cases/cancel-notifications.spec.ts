import { Notification } from './../entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Content } from '@application/entities/content';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: 'example-recipient-id'
    });

    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id
    })

    expect(notificationsRepository.notifications[0].cancelledAt).toEqual(expect.any(Date));

  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'non-existing-notification-id'
      });
    }).rejects.toThrow(NotificationNotFound)

  });
});