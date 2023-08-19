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
        id: 1,
        name: 'john',
        username: 'blueshark',
      },
      body: 'some comments, ....'
    },
  ]

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  )
}
export default PostFeed
