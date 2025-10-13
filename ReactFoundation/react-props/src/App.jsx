import Student from "./student"

function App() {
  return(
    <>
      <Student name="Spongebob" age={25} isStudent={true}/>
      <Student name="Squidward" age={35} isStudent={false}/>
      <Student name="Sandy" age={23} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App
