'use client'
import React from 'react'
import {FlagsProvider} from "flagged";
import ReactQueryProvider from "@/src/components/providers/reactQueryProvider";

const Providers = ({children})=>{
    return(
        <ReactQueryProvider>
            <FlagsProvider features={{v2: true}}>
                {children}
            </FlagsProvider>
        </ReactQueryProvider>
    )
}

export default Providers
