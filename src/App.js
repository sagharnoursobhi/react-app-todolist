
import AddUser from './components/users/AddUser';
import { useState } from 'react';
import TodoList from './components/users/TodoList';
import { nanoid } from 'nanoid';


function App() {

  const [newUser, setNewUser] = useState([
    { name:'Sara', age:'23', id:'1'},
    { name:'Stephane', age:'36', id:'2'},
    { name:'Elena', age:'45', id:'3'},
  ])

  const addNew = (name,age) => {
    setNewUser([...newUser, {name:name, age:age, id:nanoid()}]);
  }

  const deleteItem = (ix) => {
    console.log(ix)
    const listOfItems = [...newUser];
    listOfItems.splice(ix,1);
    setNewUser(listOfItems);
  }

  const listOfUsers = newUser.map((user,ix)=>{
    return <TodoList deleteItem={deleteItem} name={user.name} key={ix} age={user.age} index={ix}/>
  })

  return (
    <div>
      <AddUser addNew={addNew}/>
      { listOfUsers }
    </div>
  );
}

export default App;
