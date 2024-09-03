import UserDetail from "@/backend/models/user";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/backend/lib/connect";
export async function POST(request) {
    try {
        await connectToDatabase(); // Connect to MongoDB

        const requestData = await request.json();
        const { username, password, access } = requestData;

        // Find if the user exists
        const isUser = await UserDetail.findOne({ username: username });
        console.log(isUser, "Hello");

        if (isUser) {
            // Check if the password matches
            if (password === isUser.password) {
                return NextResponse.json({message:"Logging in"},{status:200})
            }
        }
        return NextResponse.json({message:"User not found"},{status:404})
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}