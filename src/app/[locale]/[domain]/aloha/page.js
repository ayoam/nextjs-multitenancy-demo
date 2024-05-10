import React from 'react'
import {getTranslations} from "next-intl/server";
import Home from "@/src/components/home/Home";
import {useTranslations} from "next-intl";

const Page = ()=>{
    const t = useTranslations('main');

    return (<div>
        <h1>{t('hello')}</h1>
        <Home/>
    </div>)
}

export default Page
