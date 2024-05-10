"use client"
import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { Button } from "@/src/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { Skeleton } from "@/src/components/ui/skeleton"
import {Feature, useFeature} from "flagged";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/src/components/ui/alert-dialog";
import {Checkbox} from "@/src/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Label} from "@/components/ui/label";
import DataTable from "@/components/shadcn/dataTable/dataTable";
import { columns } from "@/components/shadcn/dataTable/columns";

const Shadcn = ()=>{
    const form = useForm();
    function onSubmit(values ){console.log(values)}
    const hasV2 = useFeature("v2");
    const testSelect = [
        {
            key:"Morocco",
            value:"ma"
        },
        {
            key:"Germany",
            value:"fr"
        },
        {
            key:"United states",
            value:"usa"
        }
    ]

    const dummyTableData= [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed98f",
            amount: 350,
            status: "completed",
            email: "a@example.com",
        },
        {
            id: "728ed98z",
            amount: 250,
            status: "completed",
            email: "c@example.com",
        }
    ]

    return(
        <div className={"container w-[800px] py-32 space-y-14"}>
            {/*feature flags*/}
            <Feature name="v2">
                <h1>My App v2</h1>
            </Feature>

            {/*form*/}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        rules={{required: "Username is required"}}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                {/*<FormDescription>*/}
                                {/*    This is your public display name.*/}
                                {/*</FormDescription>*/}
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            {/*skeleton*/}
            <div className="flex items-center space-x-4 mt-8">
                <Skeleton className="h-12 w-12 rounded-full"/>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
            </div>

            {/*alert dialog*/}
            <AlertDialog>
                <Button type="button" asChild>
                    <AlertDialogTrigger>
                        Open Dialog
                    </AlertDialogTrigger>
                </Button>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => console.log("cancel")}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => console.log("continue")}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/*checkbox*/}
            <div className="flex items-center space-x-2">
                <Checkbox id="terms"/>
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </div>

            {/*select*/}
            <Select onValueChange={(val) => console.log(val)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a country"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        {testSelect.map((item, index) => {
                            return (
                                <SelectItem key={index} value={item.value}>
                                    {item.key}
                                </SelectItem>
                            );
                        })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/*toast*/}
            <Button
                variant="outline"
                onClick={() =>
                    toast.success("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>

            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3"/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3"/>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/*data table*/}
            <div className="mx-auto py-10">
                <DataTable columns={columns} data={dummyTableData}/>
            </div>
        </div>
    )
}

export default Shadcn
