import { IconType } from 'react-icons'
import { BsDot } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

interface SidebarItemProps {
  icon: IconType
  href: string
  label: string
  onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  href,
  label,
  onClick,
}) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }

    // TODO auth route

    router.push(href)
  }, [onClick, router, href])

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="
        relative
        rounded-full
        flex
        items-center
        justify-center
        h-14
        w-14
        p-4
        hover:bg-opacity-10
        hover:bg-slate-300
        cursor-pointer
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
        <BsDot className="absolute -top-1 left-0 text-sky-500" size={40} />
      </div>
      <div
        className="
        relative
        hidden
        rounded-full
        lg:flex
        items-center
        gap-4
        p-4
        hover:bg-opacity-10
        hover:bg-slate-300
        cursor-pointer
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        <BsDot className="absolute -top-1 left-0 text-sky-500" size={40} />
      </div>
    </div>
  )
}
export default SidebarItem
