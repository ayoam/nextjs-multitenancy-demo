import React from 'react'
import axios from "axios";
import Home from "@/src/components/home/Home";
import {useTranslations} from 'next-intl';
import {getTranslations} from "next-intl/server";

const Page = async ({ params })=> {
    // const t = useTranslations('main'); ==> without async
    const t = await getTranslations('main'); // ==> with async
    return (<div>
        <h1>{t('hello')}</h1>
        <Home/>
    </div>)

    // try{
    //     const response = await axios.get('http://localhost:5555/api/ms-tier/v1/tiers/tenant-test',
    //         {
    //             headers: {
    //                 'Origin': params.domain,
    //             }
    //         });
    //     return(<p>Tenant ID : {response.data}</p>)
    //
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     return <div>Not Found</div>;
    // }
}

export default Page
