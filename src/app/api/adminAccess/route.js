import UserDetail from "@/backend/models/user";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/backend/lib/connect";
export async function POST(request) {
    try {
        await connectToDatabase()
        const requestData = await request.json();
        const {username,password} = requestData;
        const allUser = await UserDetail.find();
        console.log(allUser)
        const isUser = await UserDetail.findOne({username:username});
        console.log(isUser,"HEllo")
        if(isUser){
            if(password === isUser.password){
                if(isUser.access === "BBA Honors"){
                return NextResponse.json({message:true},{status:200})
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