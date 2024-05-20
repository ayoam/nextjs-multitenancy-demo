'use server'
import {signIn} from "@/src/auth";

export const authenticate = async (data) => {
    try {
        await signIn('credentials', {...data,redirect: false});
    } catch (error) {
        throw error;
    }
}