import React ,{useState,useEffect} from 'react';
function Userdetails()
{
  const[user,setUser]=useState([]);
  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data=>setUser(data))
    .catch(error => console.error('fetching error :', error));
  },[]);
  return(
    <div>
      <h2> userdetails </h2>
      <ul>
        {
          user.map(users => (
            <li key={users.id}>{users.name},{users.address.city}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default Userdetails;