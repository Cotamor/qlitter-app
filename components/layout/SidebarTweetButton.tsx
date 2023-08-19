import { useCallback } from "react"
import {FaFeather} from 'react-icons/fa'
import { useRouter } from "next/router"




const SidebarTweetButton = () => {
  const onClick = useCallback(()=>{
    console.log('click')
  },[])

  return (
    <div onClick={onClick}>
      <div className="
        flex
        items-center
        justify-center
        lg:hidden
        mt-6
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        cursor-pointer
      ">
        <FaFeather size={24} color='white'/>
      </div>
      <div className="
         hidden
         lg:block
         mt-6
         px-4
         py-2
         rounded-full
         bg-sky-500
         hover:bg-opacity-90
         cursor-pointer
      ">
        <p className="hidden lg:block text-center text-white font-semibold text-[18px]">Tweet</p>
      </div>
    </div>
  )
}
export default SidebarTweetButton