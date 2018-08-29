import React from 'react'
import { Container, Button, Form, Checkbox } from 'semantic-ui-react'

import Register from '../../../function/Register'

import './index.css'

export class RegisterMerchants extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      store_name: '',
      email: '',
      password: '',
      phone_number: '',
      identity_number: '',
      address: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    const URL = 'merchants/register'
    const data = {
      username: this.state.username,
      store_name: this.state.store_name,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number,
      identity_number: this.state.identity_number,
      address: this.state.address
    }

    event.preventDefault()
    Register(URL, data)
  }

  render() {
    return (
      <div className=''>
        <label>Registrasi Penjual</label>
        <Container>
          <Form className='form-register-merchants' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <Form.Input name='username' placeholder='Username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Nama Toko</label>
              <Form.Input name='store_name' placeholder='Nama Toko' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Form.Input name='email' placeholder='Email' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Kata Sandi</label>
              <Form.Input name='password' type='password' placeholder='Kata Sandi' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Nomor telepon</label>
              <Form.Input name='phone_number' placeholder='Nomor Telepon' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>No. KTP</label>
              <Form.Input name='identity_number' placeholder='No. KTP' onChange={this.handleChange} />
            </Form.Field>
            <Form.TextArea label='Alamat' name='address' placeholder='Alamat' onChange={this.handleChange} />
            <Form.Field>
              <Checkbox label='Saya setuju dengan persyaratan dan ketentuan galonku.com' />
            </Form.Field>
            <Button type='submit'>Registrasi</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default RegisterMerchants 