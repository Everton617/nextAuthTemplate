'use client'

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";


const UserAccountnav = () => {
    return (
        <Button onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`
        })
        }>
            SignOut
        </Button>
    )
}; export default UserAccountnav;
