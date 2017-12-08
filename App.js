import React from 'react';
import Input from './Input.js';
import Button from './Button.jsx'

class App extends React.Component {
   render() {
      return (
         <div>
            <tr>
                <td>
                    Username:
                </td>
                <td>
                    <Input name = 'username'/>
                </td>
            </tr>
            <tr>
                <td>
                    Password:
                </td>
                <td>
                    <Input name = 'password'/>
                </td>
            </tr>
            <tr>
                <td/>
                <td>
                    <Button name='login' value='Sbmit'></Button>
                </td>
             </tr>  
         </div>
      );
   }


}
export default App;