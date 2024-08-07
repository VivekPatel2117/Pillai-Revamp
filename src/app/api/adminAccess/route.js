import dbConnect from "@/backend/lib/connect";
import dbDisconnect from "@/backend/lib/disconnect";
import UserDetail from "@/backend/models/user";
import { NextResponse } from "next/server";
 
export async function POST(request) {
    try {
        const connection = await dbConnect();
        const requestData = await request.json();
        const {username,password} = requestData;
        const isUser = await UserDetail.findOne({username:username});
        console.log(isUser,"HEllo")
        if(isUser){
            if(password === isUser.password){
                if(isUser.access === "BBA Honors"){
                    const closeConnection = await dbDisconnect()
                return NextResponse.redirect(new URL("/Programs/Bammc",request.url))
            } 
            }else{
                return NextResponse.json({message : "Password doesnt match"},{status:400})
            }
        }
        return NextResponse.json({error:"User not found"},{status:404})
    } catch (error) {
        return NextResponse.json({error:error},{status:500})
    }
}