import React from 'react'
import axios from "axios";

const Page = async ({ params })=>{
    try{
        const response = await axios.get('http://localhost:5555/api/ms-tier/v1/tiers/tenant-test',
            {
                headers: {
                    'Origin': params.domain,
                }
            });
        return(<p>Tenant ID : {response.data}</p>)

    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Not Found</div>;
    }
}

export default Page
