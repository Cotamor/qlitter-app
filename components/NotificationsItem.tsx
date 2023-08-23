import { formatDistanceToNowStrict } from 'date-fns'
import { useMemo } from 'react'
import { BsTwitter } from 'react-icons/bs'

interface NotificationsItemProps {
  data: Record<string, any>
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({ data = {} }) => {
  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null
    }
    return formatDistanceToNowStrict(new Date(data.createdAt))
  }, [data.createdAt])

  return (
    <div className="flex flex-row items-center p-6 gap-4">
      <BsTwitter color="white" size={32} />
      <p className="text-white">{data.body}</p>
      <p className="text-sm text-neutral-500">{createdAt}</p>
    </div>
  )
}
export default NotificationsItem
