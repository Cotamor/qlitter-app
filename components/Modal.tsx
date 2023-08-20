import { useCallback } from 'react'
import Button from './Button'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    onClose()
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [onSubmit, disabled])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="
      fixed
      inset-0
      flex
      justify-center
      items-center
      overflow-x-hidden
      overflow-y-auto
      z-50
      bg-neutral-800
      bg-opacity-70
    "
    >
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
        {/* content */}
        <div
          className="
          h-full
          lg:h-auto
          border-0
          rounded-lg
          shadow-lg
          relative
          flex
          flex-col
          w-full
          bg-black
        "
        >
          {/* header */}
          <div className="
            flex
            items-center
            justify-between
            p-10
            rounded-t
          ">
            <h3 className='text-white text-3xl font-semibold'>{title}</h3>
            <button onClick={handleClose} className='p-1 hover:opacity-70 transition'>
              <AiOutlineClose size={20} color='white' />
            </button>
          </div>
          {/* body */}
          <div className="p-10">
            {body}
          </div>
          {/* footer */}
          <div className="flex flex-col gap-2 p-10">
            <Button disabled={disabled} fullWidth large label={actionLabel} onClick={handleSubmit} secondary />
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
