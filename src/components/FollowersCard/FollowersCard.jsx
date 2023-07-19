import React, { useEffect, useState } from 'react'
import "./FollowersCard.css";
import User from '../user/User';
import { getAllUser } from '../../api/UserRequest';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FollowersCard = () => {
    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data}  = await getAllUser()
            setPersons(data)
            console.log(data)
        }
        fetchPersons()
    }, [])

    return (
    <div className='FollowersCard0'>
     <Card className='FollowersCard' style={{ width: '18rem' }}>
      <Card.Title>Who is following you</Card.Title>
      {persons.map((person,id)=>{
          if(person._id !== user._id)  return(<User person={person} key={id} />)
        })}
    </Card>
    </div>
  )
}

export default FollowersCard