// import { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';

// import { fetcher } from '../../lib/http';
// import Card from '../Reuseable/Card'
// import DoctorData from '../../DoctorInfo/Doctor.json';
// import SocialCard from '../Dashboard/User/SocialCard';
// import { compose } from '@reduxjs/toolkit';


// const Appointment = () => {
//     // const navigate = useNavigate();

//     // useEffect(()=> {
//     //   if (!localStorage.getItem('token')){
//     //     navigate('/login')
//     //   }
//     // },[]);

//     const [users,setUsers] = useState(" ");

//     useEffect(()=>{

//         async function userData(){
//           const request = await fetcher("users/info", "GET", null)
//           console.log(request)
//           setUsers(request.data);
//           return request;
//         }
//         userData();
//      },[users]);

//     console.log(users);

//     return (
//         <div className='Container relative'>
//            {/* {users.map((user,index)=>(
//             <SocialCard userData={user} key={index} />
//            ))} */}
//            YOOO data console ma auxa yaa audaina lol
           
//         </div>
        
//     )
// }
// export default Appointment;


import { useState, useEffect } from "react";

import SocialCard from "../Dashboard/User/SocialCard";

function Appointment() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="ml-[100px]">
      <h1>Social Cards</h1>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default Appointment;