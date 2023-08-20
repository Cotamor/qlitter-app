import { useCallback, useState } from 'react'
import Avatar from './Avatar'
import Button from './Button'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import useCurrentUser from '@/hooks/useCurrentUser'

interface FormProps {
  placeholder: string
  isComment?: boolean
  postId?: string
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const { data: currentUser } = useCurrentUser()
  console.log(currentUser, 'CurrentUser')
  const [isLoading, setIsLoading] = useState(false)
  const [body, setBody] = useState('')

  const onSubmit = useCallback(() => {
    console.log(body)
  }, [body])

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div className="">{/* <Avatar userId={currentUser.id} /> */}</div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              className="
                disabled:opacity-80
                peer
                resize-none
                mt-3
                w-full
                bg-black
                ring-0
                outline-none
                text-[20px]
                placeholder-neutral-500
                text-white
              "
            ></textarea>
            <hr
              className="
                opacity-0
                peer-focus:opacity-100
                h-[1px]
                w-full
                border-neutral-800
                transiton
              "
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button disabled={isLoading} onClick={onSubmit} label="Tweet" />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            Welcome to Twitter
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  )
}
export default Form
