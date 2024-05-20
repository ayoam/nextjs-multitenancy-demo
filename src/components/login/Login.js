'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import {authenticate} from "@/src/lib/actions.js";
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = async (data) => {
        authenticate(data).then((res)=>{
            router.push('/');
        })
        .catch(err=>{
            alert(err.message);
        });
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register("username",{
                required: "username required"
            })} />
            <input type="password" placeholder="password" {...register("password",{
                required: "password required"
            })}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
