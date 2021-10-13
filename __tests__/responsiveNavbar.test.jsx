import React from 'react'
import {render, screen, act} from '@testing-library/react'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import userEvent from '@testing-library/user-event'

describe('Home', () => {

  it('check menu hidden by default', () => {
    render(<ResponsiveNavbar />)
    // Check elements from menu are hidden
    const home = screen.queryByRole('li', {name: /Home/i})
    const cv = screen.queryByRole('li', {name: /CV/i})
    const contact = screen.queryByRole('li', {name: /Contact/i})

    expect(home).toBeNull()
    expect(cv).toBeNull()
    expect(contact).toBeNull()
  })

  it('check menu navigation items are displayed' , () => {

    let {rerender} = render(<ResponsiveNavbar/>)

    const resizeWindow = (x, y) => {
      window.innerWidth = x;
      window.innerHeight = y;
      window.dispatchEvent(new Event('resize'));
    }

    act(() => resizeWindow(375,667))

    rerender(<ResponsiveNavbar/>)

    const button = screen.queryByRole('button', {name: /menu/i})
    // Assert that text Home, CV, Contact can be found in the menu. 
    userEvent.click(button)

    const home = screen.queryByRole('link', {name: /Home/i})
    const cv = screen.queryByRole('link', {name: /CV/i})
    const contact = screen.queryByRole('link', {name: /Contact/i})
    
    expect(home.textContent).toContain('Home')
    expect(cv.textContent).toContain('CV')
    expect(contact.textContent).toContain('Contact')

  })

})