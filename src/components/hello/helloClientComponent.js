"use client"
import React from 'react'
import {useTranslation} from "@/src/app/i18n/client";

const HelloClientComponent = ({ lang })=>{
    const { t:translate } = useTranslation(lang, 'translationPage');
    return(
        <p>{translate("DESCRIPTION")}</p>
    )
}

export default HelloClientComponent
