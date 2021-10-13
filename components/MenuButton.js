// Delete this I think!

import { render } from '@testing-library/react';
import React, {useState} from 'react';

// Stateful Class Component that implements a toggle button
// class MenuButtonTest extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {isOn: false}
//   }

//   handleClick(prevState) {
//     this.setState({isOn: !prevState})
//   }

//   render(){
//     return(
//       <>
//         <button onClick={() => this.handleClick(this.isOn)}>Menu</button>
//       </>
//       )
//     }name="menu"

// }

// module.exports = MenuButtonTest

// Stateful Functional Component that implements a toggle button using hooks
export default function MenuButton(props) {
  const [isOn, setIsOn] = useState(false);
  return(
    <>
      <button onClick={() => setIsOn(!isOn)}>Menu</button>
    </>
  )
}

