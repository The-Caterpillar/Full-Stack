import Student from "./student.jsx"
import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <Student name="Spongebob" age={25} isStudent={true}/>
      <Student name="Squidward" age="35" isStudent={false}/>
      <Student name="Sandy" age={23} isStudent={true}/>
      <Student/>
      <UserGreeting isLoggedIn={true} userName="Saras"/>
      <UserGreeting isLoggedIn={true} />
      <UserGreeting />
    </>
  )
}

export default App
