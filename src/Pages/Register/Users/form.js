import React from 'react'
import { Container, Button, Form, Checkbox } from 'semantic-ui-react'

import Register from '../../../function/register'

import './index.css'

class RegisterUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      fullname: '',
      phone_number: '',
      address: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {

    const URL = 'users/register'
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      fullname: this.state.fullname,
      phone_number: this.state.phone_number,
      address: this.state.address
    }

    event.preventDefault()
    Register(URL, data)
  }

  render() {
    return (
      <div className=''>
        <label className='daftar-users'>Registrasi Pembeli</label>
        <Container>
          <Form className='form-register-users' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <Form.Input name='username' type='text' placeholder='Username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Form.Input name='email' type='email' placeholder='Email' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Kata Sandi</label>
              <Form.Input name='password' type='password' placeholder='Kata Sandi' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Nama Lengkap</label>
              <Form.Input name='fullname' type='text' placeholder='Nama Lengkap' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Nomor telepon</label>
              <Form.Input name='phone_number' type='text' placeholder='Nomor telepon' onChange={this.handleChange} />
            </Form.Field>
            <Form.TextArea label='Alamat' name='address' type='text' placeholder='Alamat' onChange={this.handleChange} />
            <Form.Field>
              <Checkbox label='Saya setuju dengan persyaratan dan ketentuan galonku.com' />
            </Form.Field>
            <Button type='submit' onClick={this.handleClick}>Registrasi</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default RegisterUsers