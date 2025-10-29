import List from "./Lists"
import UpdatingLists from "./UpdatingLists"
import ArrayOfObjects from "./ArrayOfObjects";
function App() {
      
  const fruits =
        [
            {name: 'apple', calories: 95},
            {name: 'orange', calories: 45},
            {name: 'banana', calories: 105},
            {name: 'pineapple', calories: 37},
            {name: 'peach', calories: 159}
        ];

  // const vegetables =
  //       [
  //           {name: 'potato', calories: 105},
  //           {name: 'celery', calories: 45},
  //           {name: 'corn', calories: 35},
  //           {name: 'broccoli', calories: 37},
  //           {name: 'zuccini', calories: 29}
  //       ];
  return (
    <>
      {fruits.length > 0 && <List items = {fruits} category = "Fruits" />}
      {/* {vegetables.length > 0 ? <List items = {vegetables} category = "Veggies" /> : ""} */}

    <UpdatingLists/>

    <ArrayOfObjects/>
    </>
  )
}

export default App
