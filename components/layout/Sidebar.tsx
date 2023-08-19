import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import SidebarLogo from './SidebarLogo'
import SidebarTweetButton from './SidebarTweetButton'

const Sidebar = () => {
  // temporary
  const testUser = {
    id: 1,
    name: 'John',
    emal: 'john@email.com',
  }

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${testUser.id}`,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
