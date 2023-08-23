import useCurrentUser from '@/hooks/useCurrentUser'
import useNotifications from '@/hooks/useNotifications'
import { useEffect } from 'react'
import NotificationsItem from './NotificationsItem'

const NotificationsFeed = () => {
  const {
    data: currentUser,
    isLoading,
    error,
    mutate: mutateCurrentUser,
  } = useCurrentUser()
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id)

  useEffect(() => {
    mutateCurrentUser()
  }, [mutateCurrentUser])

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <NotificationsItem data={notification} key={notification.id} />
      ))}
    </div>
  )
}
export default NotificationsFeed
