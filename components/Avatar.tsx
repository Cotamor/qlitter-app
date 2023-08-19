import Image from "next/image"
import { useRouter } from "next/router"

interface AvatarProps {
  userId: string
  isLarge?: boolean
  hasBorder?: boolean
}

const Avatar:React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder
}) => {
  const router = useRouter()


  return (
    <div className={`
      ${hasBorder? 'border-4 border-black':''}
      ${isLarge ? 'h-32':'h-12'}
      ${isLarge ? 'w-32':'w-12'}
      rounded-full
      hover:opacity-90
      transition
      cursor-pointer
      relative
    `}>
      
      <Image
        alt='avatar'
        fill
        src={'/images/placeholder.png'}
        onClick={()=>{}}
        className="object-fit rounded-full"
      />
    </div>
  )
}
export default Avatar