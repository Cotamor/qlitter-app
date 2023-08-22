import { useCallback, useEffect, useState } from 'react'
import Modal from '../Modal'
import useEditModal from '@/hooks/useEditModal'
import useCurrentUser from '@/hooks/useCurrentUser'
import useUser from '@/hooks/useUser'
import Input from '../Input'
import ImageUpload from '../ImageUpload'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const EditModal = () => {
  const { data: currentUser } = useCurrentUser()
  // for mutate and revalidate
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id)
  const editModal = useEditModal()

  const [profileImage, setProfileImage] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    setProfileImage(currentUser?.profileImage)
    setCoverImage(currentUser?.coverImage)
    setName(currentUser?.name)
    setUsername(currentUser?.username)
    setBio(currentUser?.bio)
  }, [
    currentUser?.bio,
    currentUser?.coverImage,
    currentUser?.name,
    currentUser?.profileImage,
    currentUser?.username,
  ])

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async() => {
    try {
      setIsLoading(true)

      await axios.patch('/api/edit', {name, username,bio, profileImage, coverImage})
      mutateFetchedUser()

      toast.success('Updated')
      editModal.onClose()

    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setIsLoading(false)
    }

  }, [bio, coverImage, editModal, mutateFetchedUser, name, profileImage, username])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        value={profileImage}
        disabled={isLoading}
        onChange={(image) => setProfileImage(image)}
        label="Upload profile image"
      />
      <ImageUpload
        value={coverImage}
        disabled={isLoading}
        onChange={(image) => setCoverImage(image)}
        label="Upload cover image"
      />
      <Input
        placeholder="Name"
        value={name}
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Username"
        value={username}
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Bio"
        value={bio}
        disabled={isLoading}
        onChange={(e) => setBio(e.target.value)}
      />
    </div>
  )

  return (
    <Modal
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      title="Edit Profile"
      body={bodyContent}
      actionLabel="Save"
      disabled={isLoading}
    />
  )
}
export default EditModal
