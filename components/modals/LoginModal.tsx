import { useState, useCallback } from 'react'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import Input from '../Input'
import useLoginModal from '@/hooks/useLoginModal'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (isLoading) {
      return
    }

    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, loginModal, registerModal])

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)
      console.log({ email, password })

      await signIn('credentials', {
        email,
        password,
      })

      toast.success('Logged in')

      loginModal.onClose()
    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }, [email, password, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        disabled={isLoading}
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {' '}
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      title="Login"
      actionLabel="Sign in"
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
