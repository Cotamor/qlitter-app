import { useState, useCallback } from 'react'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import Input from '../Input'
import useLoginModal from '@/hooks/useLoginModal'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (isLoading) {
      return
    }

    registerModal.onClose()
    loginModal.onOpen()
  }, [isLoading, loginModal, registerModal])

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)
      console.log({ email, password, username, name })

      await axios.post('/api/register', {
        email,
        password,
        username,
        name,
      })

      setIsLoading(false)

      toast.success('Account created.')

      // await signIn('credentials', {
      //   email,
      //   password,
      // })

      registerModal.onClose()
    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }, [email, name, password, registerModal, username])

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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {' '}
          Sign in
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      title="Create an account"
      actionLabel="Register"
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
