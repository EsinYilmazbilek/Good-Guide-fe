import { notify } from 'react-notify-toast'

export function createNotification(message) {
  notify.show(message, 'warning', 4000)
}

