import PostItem from './PostItem'

interface PostFeedProps {
  userId?: string
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  // temporary
  const posts = [
    {
      id: 1,
      user: {
        id: '64e22e07a76e02f0f71b237a',
        name: 'john',
        username: 'blueshark',
      },
      body: 'some comments, ....'
    },
  ]

  return (
    <div>
      post
      {posts.map((post) => (
        <PostItem key={post.id} data={post} userId={userId} />
      ))}
    </div>
  )
}
export default PostFeed
