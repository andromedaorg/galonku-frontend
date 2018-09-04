import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'
import Typing from 'react-typing-animation';

import './index.css'

const Landing = () => (
  
  <div className='landing'>
    <div className='blue-background'>
      <Header as='h1'>
        <div className='tagline'>
        <Typing>          
          Pesan dan Jual Galon Lebih Mudah
        </Typing>
        </div>
      
      </Header>

      <div className='button-landing'>
        
          <Link to="/merchants/login" className="nav-link">
            <Button className='the-button' inverted size='big'>Mulai Jual</Button>
          </Link>
        
        
          <Link to="/users/login" className="nav-link">
            <Button className="the-button" inverted size='big'>Mulai Pesan</Button>
          </Link>
        
      </div>
    </div>
  </div >
)

export default Landing