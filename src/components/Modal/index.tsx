import React from 'react'
import { ModalContainer, ModalContent } from './styles'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function Modal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <ModalContainer style={{ display: isOpen ? 'flex' : 'none' }}>
      <ModalContent>
        <h2>Success!</h2>
        <p>Your form has been successfully submitted.</p>
        <button onClick={onRequestClose}>Close</button>
      </ModalContent>
    </ModalContainer>
  )
}
