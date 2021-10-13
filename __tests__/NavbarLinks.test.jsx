import React from 'react'
import {render, screen} from '@testing-library/react'
import Navbar from '../components/NavbarLinks'

describe('Navbar', () => {

  it('check menu navigation items are displayed' , () => {
    render(<Navbar/>)

    const home = screen.getByRole('link', {name: /Home/i})
    const cv = screen.getByRole('link', {name: /CV/i})
    const contact = screen.getByRole('link', {name: /Contact/i})
    
    expect(home.textContent).toContain('Home')
    expect(cv.textContent).toContain('CV')
    expect(contact.textContent).toContain('Contact')
  })

})

