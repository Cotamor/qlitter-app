import { useRouter } from 'next/router'

const UserView = () => {
  const router = useRouter()
  const { userId } = router.query
  console.log('userId', userId)
  return (
    <div className="">
      <h1>User page</h1>
      <div>UserId: {userId}</div>
    </div>
  )
}
export default UserView
