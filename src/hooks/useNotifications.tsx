import { ReactNode, useState } from 'react';
import { Notification } from '../types/misc';

export function useNotifications(initialValue: Notification[] = []) {
  const [items, setNotifications] = useState<Notification[]>(initialValue);

  const publish = function (notifications: Notification[]) {
    setNotifications([...notifications, ...items]);
  };

  const dismiss = function (index: number) {
    setNotifications((notifications) =>
      notifications.filter((item, i) => i !== index)
    );
  };

  return { notifications: items, publish, dismiss, setNotifications };
}
