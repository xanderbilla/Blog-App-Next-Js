import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/User";
import connect from "@/utils/db";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connect();

    const hashedPass = await bcrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashedPass,
    })

    try {
        await newUser.save()
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};