import { ConnectDB } from "@/lib/config/db.js";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    await ConnectDB(); // ✅ Always connect inside the request handler

    const formData = await request.formData();
    const emailData = {
        email: formData.get('email') || "", // fallback empty
    };

    if (!emailData.email) {
        return NextResponse.json({ success: false, msg: "Email is required." }, { status: 400 });
    }

    await EmailModel.create(emailData);

    return NextResponse.json({ success: true, msg: 'Email Subscribed' });
}

export async function GET(request){
    const emails = await EmailModel.find({});
    return NextResponse.json({
        emails
    });
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({
        success:true,msg:"Email Deleted"
    })
}