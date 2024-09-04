import { secondbanner } from "@/Constant"
import { NextResponse } from "next/server"

export const GET = async() =>{
    return NextResponse.json({
        secondbanner:secondbanner,
        status:"success",
        message:"keep alive"
    })
}