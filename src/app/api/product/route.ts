
import {  bannerapi } from "@/Constant"
import { NextResponse } from "next/server"


export const GET = async() =>{
    return NextResponse.json({
        bannerapi:bannerapi,
        status:"success",
        message:"keep alive"
    })
}

