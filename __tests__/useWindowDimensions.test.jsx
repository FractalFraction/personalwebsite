import React from 'react'
import {render, screen, act, hydrate} from '@testing-library/react'
import useWindowDimensions from '../hooks/useWindowDimensions'

describe('Navbar', () => {

  let TestComponent;

  beforeEach(() => {
    TestComponent = () => {
        const size = useWindowDimensions(); 
        return(  
          <div data-testid="testwindow">
            width: {size.width} ~ height: {size.height}
          </div>
        )
      }    
    TestComponent.displayName = 'TestComponent';
  });

  fit('check current screen size information is obtained' , () => {
    render(<TestComponent/>)

    const container = screen.getByTestId('testwindow')
    // By default JSDOM defines the screen size to be 1024 by 768
    //https://github.com/jsdom/jsdom/blob/0cba358253fd5530af0685ac48c2535992464d06/lib/jsdom/browser/Window.js#L587-L588
    // undefined by default
    expect(container.textContent).toContain('width: ~ height: ')
  })

  it('screen dimensions update correctly' , () => {
    const {rerender} = render(<TestComponent/>)

    const container = screen.getByTestId('testwindow')
    expect(container.outerHTML).toBe('<div data-testid=\"testwindow\">width: ~ height: </div>')

    const resizeWindow = (x, y) => {
      window.innerWidth = x;
      window.innerHeight = y;
      window.dispatchEvent(new Event('resize'));
    }

    act(() => resizeWindow(800,600))

    rerender(<TestComponent/>)
    expect(container.outerHTML).toBe('<div data-testid=\"testwindow\">width: 800 ~ height: 600</div>')

  })

})
