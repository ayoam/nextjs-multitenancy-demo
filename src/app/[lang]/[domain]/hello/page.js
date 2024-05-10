import React from 'react'
import { useTranslation } from '@/src/app/i18n'
import HelloClientComponent from "@/src/components/hello/helloClientComponent";

const Page = async({ params: { lang }} )=>{
    const { t:translate } = await useTranslation(lang, 'translationPage');
    return(
        <div>
            <h1>{translate("TITLE")}</h1>
            <HelloClientComponent lang={lang}/>
        </div>
    )
}

export default Page
