import {useRouter} from 'next/router'

import Header from "@/components/Header"
import PostItem from "@/components/posts/PostItem"
import usePost from "@/hooks/usePost"
import Form from '@/components/Form'
import CommentFeed from '@/components/posts/CommentFeed'

const PostView = () => {
  const router = useRouter()
  const {postId} = router.query

  const {data: fetchedPost, isLoading} = usePost(postId as string)

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        Loading...
      </div>
    )
  }

  return (
    <>
      <Header showBackArrow label="Tweet"/>
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder='Post your reply!' />
      <CommentFeed comments={fetchedPost?.comments}/>
    </>
  )
}
export default PostView