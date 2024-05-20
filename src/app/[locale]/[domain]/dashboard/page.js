import React from 'react'
import {auth, signOut} from "@/src/auth";

const Page = async () => {
    const session = await auth();
    return (<>
            <p>{session?.user?.name}</p>
            {session && <form
                action={async () => {
                    "use server"
                    await signOut({redirectTo: '/login'})
                }}
            >
                <button type="submit">Sign Out</button>
            </form>}
        </>
    )
}

export default Page
