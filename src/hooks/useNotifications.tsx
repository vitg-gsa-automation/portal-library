import { useState } from 'react';
import { Notification } from '../types/misc';

export function useNotifications(initialValue: Notification[] = []) {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialValue);

  const publish = function (notifications: Notification[]) {
    setNotifications((prevState) => [...notifications, ...prevState]);
  };

  const dismiss = function (index: number) {
    setNotifications((prevState) => prevState.filter((item, i) => i !== index));
  };

  const update = function (id: string, notification: Notification) {
    setNotifications((prevState) =>
      prevState.map((n) => (n.id === id ? notification : n))
    );
  };

  return { notifications, publish, dismiss, setNotifications, update };
}
