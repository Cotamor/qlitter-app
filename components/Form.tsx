import {useCallback, useState} from 'react'
import Avatar from './Avatar'
import Button from './Button'

interface FormProps {
  placeholder: string,
  isComment?: boolean
  postId?: string
}

const Form:React.FC<FormProps> = ({
  placeholder,
  isComment,
  postId
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [body, setBody] = useState('')

  const onSubmit = useCallback(()=>{
    console.log(body)
  },[body])

  // temporary
  const currentUser = {
    id: '1',
    name: 'john',
    username: '@blueshark',
  }

  return (
    <div className='border-b-[1px] border-neutral-800 px-5 py-2'>
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div className="">
            <Avatar userId={currentUser.id} />
          </div>
          <div className="w-full">
            <textarea 
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              className='
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
              '
            ></textarea>
            <hr
              className='
                opacity-0
                peer-focus:opacity-100
                h-[1px]
                w-full
                border-neutral-800
                transiton
              '
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button disabled={isLoading} onClick={onSubmit} label='Tweet'/>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          Welcome to Twitter
        </div>
      )}
    </div>
  )
}
export default Form