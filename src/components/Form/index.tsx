import React, { useState } from 'react'
import { FormContainer, ContainerLogo } from './styles'
import formIcon from '../../assets/img/form_icon.png'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Modal } from '../Modal'

const schema = zod.object({
  iname: zod.string().min(3, 'Name is required!').nonempty(),
  iphone: zod
    .string()
    .regex(/^(?!0+$)\d{8,}$/, 'Invalid phone number!')
    .min(11, 'Type at least eleven characters!')
    .max(11, 'Type no more than 11 characters!'),
  iemail: zod.string().email('Invalid email!'),
  icompany: zod.string().min(3, 'Type at least three characters!').nonempty(),
  iemployees: zod
    .number()
    .min(1, 'Minimum value is 1!')
    .max(1000, 'Maximum value is to big!')
    .int(),
  ibusiness: zod.string().min(3, 'Type at least three characters!').nonempty(),
  iobjectives: zod
    .string()
    .min(3, 'Type at least three characters!')
    .nonempty(),
})

export function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  console.log(errors)

  const onSubmit = (data: any) => {
    console.log('Form data: ', data)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <ContainerLogo>
          <h3>Form Company</h3>
          <img src={formIcon} alt="Image Icon Form" />
        </ContainerLogo>

        <label htmlFor="iname">Name</label>
        <input
          type="text"
          id="iname"
          min={1}
          max={60}
          placeholder="How you prefer to be called?"
          {...register('iname')}
        />

        <label htmlFor="iphone">Phone</label>
        <input
          type="tel"
          min={11}
          max={11}
          id="iphone"
          placeholder="Enter your WhatsApp number"
          {...register('iphone')}
        />

        <label htmlFor="iemail">E-mail</label>
        <input
          type="email"
          min={1}
          max={60}
          id="iemail"
          placeholder="Enter your email address"
          {...register('iemail')}
        />

        <label htmlFor="icompany">Name of Company</label>
        <input
          type="text"
          min={1}
          max={60}
          id="icompany"
          placeholder="What is the name of the company"
          {...register('icompany')}
        />

        <label htmlFor="iemployees">Number of employees</label>
        <input
          type="number"
          id="iemployees"
          placeholder="Enter the number of employees"
          {...register('iemployees', { valueAsNumber: true })}
        />

        <label htmlFor="ibusiness">About your business</label>
        <input
          type="text"
          min={1}
          max={80}
          id="ibusiness"
          placeholder="Tell us a bit about your products or services"
          {...register('ibusiness')}
        />

        <label htmlFor="iobjectives">Objectives of the project</label>
        <textarea
          id="iobjectives"
          min={1}
          max={100}
          placeholder="Describe what the objectives of this project are"
          {...register('iobjectives')}
        ></textarea>

        <button type="submit">send proposal</button>
      </FormContainer>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} />
    </form>
  )
}
