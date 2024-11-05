import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
//import { S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

type Params={
  fileName:string
}

export async function GET(req:Request,context: { params: Params }){
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: context.params.fileName,
    });

    const { Bucket, Key } = (command as any).input; 
    const url = `https://${Bucket}.s3.amazonaws.com/${Key}`;

    return  Response.json({url})
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return Response.error();
  }
}


const Bucket = process.env.AWS_BUCKET_NAME;
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(request: Request,context: { params: Params }) {
    // const { filename, contentType } = await request.json()
  
    // try {
    //   console.log("Filename and content type",filename,contentType)
    //   const client = new S3Client({ region: process.env.AWS_REGION })
    //   const { url, fields } = await createPresignedPost(client, {
    //     Bucket: process.env.AWS_BUCKET_NAME!,
    //     Key: uuidv4(),
    //     Conditions: [
    //       ['content-length-range', 0, 10485760], // up to 10 MB
    //       ['starts-with', '$Content-Type', contentType],
    //     ],
    //     Fields: {
    //       acl: 'public-read',
    //       'Content-Type': contentType,
    //     },
    //     Expires: 3600, // Seconds before the presigned post expires. 3600 by default.
    //   })
    // console.log("Url and fields",url,fields)
    //   return Response.json({ url, fields })
    // } catch (error) {
    //   return Response.json({ error: error.message })
    // }
  
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];
  
    const response = await Promise.all(
      files.map(async (file) => {
        // not sure why I have to override the types here
        const Body = (await file.arrayBuffer()) as Buffer;
        s3.send(new PutObjectCommand({ Bucket, Key: context.params.fileName, Body }));
      })
    );
  
    return Response.json(response);
  }

