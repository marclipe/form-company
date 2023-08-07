import React from 'react'
import { FormContainer, ContainerLogo } from './styles'
import formIcon from '../../assets/img/form_icon.png'

export function Form() {
  return (
    <form action="">
      <FormContainer>
        <ContainerLogo>
          <h3>Form Company</h3>
          <img src={formIcon} alt="Image Icon Form" />
        </ContainerLogo>

        <label htmlFor="iname">Name</label>
        <input
          type="text"
          name="name"
          id="iname"
          placeholder="How you prefer to be called?"
        />

        <label htmlFor="iphone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="iphone"
          placeholder="Enter your WhatsApp number"
        />

        <label htmlFor="iemail">E-mail</label>
        <input
          type="email"
          name="email"
          id="iemail"
          placeholder="Enter your email address"
        />

        <label htmlFor="icompany">Name of Company</label>
        <input
          type="text"
          name="company"
          id="icompany"
          placeholder="What is the name of the company"
        />

        <label htmlFor="iemployees">Number of employees</label>
        <input
          type="number"
          name="employees"
          id="iemployees"
          placeholder="Enter the number of employees"
        />

        <label htmlFor="ibusiness">About your business</label>
        <input
          type="text"
          name="business"
          id="ibusiness"
          placeholder="Tell us a bit about your products or services"
        />

        <label htmlFor="iobjectives">Objectives of the project</label>
        <textarea
          name="objectives"
          id="iobjectives"
          placeholder="Describe what the objectives of this project are"
        ></textarea>

        <button type="submit">send proposal</button>
      </FormContainer>
    </form>
  )
}
