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
                // Check access level
                if (isUser.access === "BBA Honors") {
                    return NextResponse.json({ message: true }, { status: 200 });
                } else {
                    return NextResponse.json({ message: "Access denied" }, { status: 403 });
                }
            } else {
                return NextResponse.json({ message: "Password doesn't match" }, { status: 400 });
            }
        } else {
            // Insert the new user
            const newUser = new UserDetail({
                username: username,
                password: password, // Make sure to hash passwords before saving in a real application
                access: access || "default access" // Set a default access if not provided
            });

            await newUser.save(); // Save the new user to the database

            return NextResponse.json({ message: "User created successfully" }, { status: 201 });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}