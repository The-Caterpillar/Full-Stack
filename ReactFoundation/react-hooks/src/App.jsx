/* React hooks = 
- Special functions that allow functional components to use React features without class components (version16)
- If a function has 'use' in the begining, it's usually a react hook.
- use: State, Effect, Context, Reducer, Callback, etc.

useState() :
- A react hook that allows the creation of a stateful variable AND a setter function to update it's value
in the virtual DOM. [name, setName]
*/

import MyComponent from "./MyComponent"

function App() {

  return (
    <>
    <MyComponent/>
    </>
  )
}

export default App
