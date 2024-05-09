'use client'
import React from 'react'
import {useGetUser} from "@/src/query/userQueries";

const Home = ()=>{
    const {data: usersList} = useGetUser();
    return (
        <div>
            <p>Users list</p>
            {usersList?.map((user,index) => (
                <p key={user.id}>{user.title} {user.firstName} {user.lastName}</p>
            ))}
        </div>
    );
}

export default Home
