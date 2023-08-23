import useUsers from '@/hooks/useUsers'
import { useRouter } from 'next/router'
import FollowBarItem from './FollowBarItem'

const FollowBar = () => {
  const { data: users = [] } = useUsers()

  if (users.length === 0) {
    return null
  }

  return (
    <div className="hidden lg:block px-6 py-4">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to Follow</h2>
        <div className="flex flex-col gap-6 mt-4">
        <FollowBarItem data={users} />
        </div>
      </div>
    </div>
  )
}
export default FollowBar
