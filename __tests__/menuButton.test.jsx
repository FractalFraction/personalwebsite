import React from 'react'
import {render, screen} from '@testing-library/react'
import MenuButton from '../components/MenuButton.js'

describe('menu button', () => {

  it('can render', () => {
    render(<MenuButton />)
    // button is in the document.body (displayed on screen)
    const button = screen.getByRole('button', {name: /menu/i})
    expect(button.textContent).toBe("Menu")
  })

} )