import { useState } from "react"
import Counter from "./Components/Counter";
import Input from "./Components/Input";

function App() {
  const [name, setName] = useState("User");
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(["Ahmet","Cansu"]);
 const [address, setAddress] = useState({city: "İstanbul" ,no:1312 })

  return (
    <>
      <h3>Hello  {name} ! your age {age} </h3>
        <button onClick={() => { setName("User_2"), setAge(20) }}>Change Property </button>
      <hr />

      <h3>Your Friend List :</h3>
        {friends.map(friend => <li key={friend.id}>{friend}</li>)}
      
        <button onClick={() => { setFriends([...friends,"Sefa", "Ayşe", "Mahmut"]) }}>Add friend</button>
      <br />
      
      

      <hr />

      {address.city} {address.no}
      <br />
      <button onClick={()=> {setAddress({...address,city:"Sakarya" ,no:545454})}}>Teleport</button>

      <hr />
     
      <Counter/>
      <hr />
      <Input/>
    </>
  )
}

export default App
