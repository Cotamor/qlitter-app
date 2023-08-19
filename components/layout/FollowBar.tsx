import Avatar from '../Avatar'

const FollowBar = () => {
  // temporary
  const testUser = {
    id: '1',
    name: 'john',
    username: '@blueshark',
  }

  return (
    <div className="hidden lg:block px-6 py-4">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to Follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-row items-center gap-4">
            <Avatar userId={testUser.id} />
            <div className="flex flex-col">
              <p className="text-white font-semibold text-sm">
                {testUser.name}
              </p>
              <p className="text-neutral-400 text-sm">{testUser.username}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Avatar userId={testUser.id} />
            <div className="flex flex-col">
              <p className="text-white font-semibold text-sm">
                {testUser.name}
              </p>
              <p className="text-neutral-400 text-sm">{testUser.username}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Avatar userId={testUser.id} />
            <div className="flex flex-col">
              <p className="text-white font-semibold text-sm">
                {testUser.name}
              </p>
              <p className="text-neutral-400 text-sm">{testUser.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FollowBar
