import Link from 'next/link'
import Avatar from '../Avatar'
import useCurrentUser from '@/hooks/useCurrentUser'

interface FollowBarItemProps {
  data: Record<string, any>
}

const FollowBarItem: React.FC<FollowBarItemProps> = ({ data }) => {
  const {data: currentUser} = useCurrentUser()

  const otherUsers = data.filter((user: Record<string, any>) => user.id !== currentUser?.id)

  return (
    <>
      {otherUsers.map((user: Record<string, any>) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <div className="flex flex-row items-center gap-4">
            <Avatar userId={user.id} />
            <div className="flex flex-col">
              <p className="text-white font-semibold text-sm">{user.name}</p>
              <p className="text-neutral-400 text-sm">{user.username}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
export default FollowBarItem
