import React from 'react'
import { ModalContainer, ModalContent } from './styles'

export function Modal({ isOpen, onRequestClose }: any) {
  return (
    <ModalContainer style={{ display: isOpen ? 'block' : 'none' }}>
      <ModalContent>
        <h2>Success!</h2>
        <p>Your form has been successfully submitted.</p>
        <button onClick={onRequestClose}>Close</button>
      </ModalContent>
    </ModalContainer>
  )
}
