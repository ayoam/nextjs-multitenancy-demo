import React from 'react'
import axios from "axios";

const GetUsersList = async () => {
    const response = await axios.get("https://dummyapi.io/data/v1/user?limit=10",{
        headers:{
            "app-id": "663ba56703f75e0460bf828e"
        }
    });
    return response?.data?.data
}

export default GetUsersList
