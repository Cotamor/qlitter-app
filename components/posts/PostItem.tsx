import { useRouter } from 'next/router'
import Avatar from '../Avatar'
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useCallback } from 'react'
import useLoginModal from '@/hooks/useLoginModal'

interface PostItemProps {
  data: Record<string, any>
  userId?: string
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  // temporary
  const hasLiked = false
  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart

  
  const goToUser = useCallback((ev:any) => {
    ev.stopPropagation()
    router.push(`/users/${data.user.id}`)
  },[data.user.id, router])

  const goToPost = useCallback((ev: any) => {
    ev.stopPropagation()
    router.push(`/posts/${data.id}`)
  },[data.id, router])

  return (
    <div
      onClick={goToPost}
      className="
        border-b-[1px]
        border-neutral-800
        p-5
        cursor-pointer
        hover:bg-neutral-900
        transition
      "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div className="">
          {/* user info */}
          <div className="flex flex-row items-center gap-2 ">
            <p
              onClick={goToUser}
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="text-neutral-500 cursor-pointer hover:underline hidden md:block flex-1"
            >
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">20th June</span>
          </div>
          {/* post */}
          <div className="text-white mt-1">{data.body}</div>
          {/* status */}
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <p>3</p>
            </div>
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500">
              <LikeIcon size={20} color={hasLiked ? 'red' : ''} />
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PostItem
