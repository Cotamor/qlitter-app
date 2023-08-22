import Header from '@/components/Header'
import PostFeed from '@/components/posts/PostFeed'
import UserBio from '@/components/users/UserBio'
import UserHero from '@/components/users/UserHero'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'

const UserView = () => {
  const router = useRouter()
  const { userId } = router.query

  const { data: fetchedUser, isLoading } = useUser(userId as string)
  console.log(fetchedUser)

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    )
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string}/>
    </>
  )
}
export default UserView
