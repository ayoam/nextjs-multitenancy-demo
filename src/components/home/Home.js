'use client'
import React from 'react'
import {useTranslations} from "next-intl";

const Home = ()=>{
    const t = useTranslations('main');
    return(
        <p>{t("welcome")}</p>
    )
}

export default Home
