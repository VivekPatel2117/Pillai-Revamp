import Course from "@/backend/models/course";
import { connectToDatabase } from "@/backend/lib/connect";
import { NextResponse } from "next/server";
export  async function GET(request) {
try {
  await connectToDatabase()
  const url =  new URL(request.url)
  const subject = url.searchParams.get("subject");
  const data = await Course.findOne({courseName:subject});
  if(data){
    return NextResponse.json(data,{status:200})
  }else{
    return NextResponse.json({error:"No course found"},{status:404});
  }
} catch (error) {
  console.log(error);
  return NextResponse.json({error:"Internal Error"},{status:500})
}
}
export async function POST(request) {
  try {

    const data = await request.json();
    const subject = data.subject
    const dataToUpdate = data.data
    const {
      courseDesc,
      courseVision,
      courseMission,
      FY,
      SY,
      TY,
      coursePdf, // make sure to include coursePdf in the request data if it's required
    } = dataToUpdate;
  
    const result = await Course.updateOne(
      { courseName:subject },
      {
        $set: {
          courseDesc:courseDesc,
          courseVision:courseVision,
          courseMission:courseMission,
          FY:FY,
          SY:SY,
          TY:TY,
        }
      },
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Course updated successfully!" },{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred while updating the course" }, { status: 500 });
  }
}