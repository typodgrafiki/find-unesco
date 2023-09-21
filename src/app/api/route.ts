import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)
    
    const todos = await res.json()
    
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    const { id } = await request.json()
    return NextResponse.json(id)
}

export async function DELETE(request: Request) {
    const { id } = await request.json()
    return NextResponse.json(id)
}



// export default async function handler(req, res) {
    
//     console.log("Handler function called");
//     console.log("Request object:", req);
//     console.log("Response object:", res);
    
    // if (req.method === 'POST') {
    //     const { email } = req.body;

    //     // Data validation
    //     if (!email || !email.includes('@')) {
    //         res.status(400).json({ success: false, message: 'Invalid email' });
    //         return;
    //     }

    //     let client;
        
    //     if (uri) {    
    //         try {
    //             client = await MongoClient.connect(uri);
    //         } catch (error) {
    //             res.status(500).json({ success: false, message: 'Could not connect to database' });
    //             return;
    //         }

    //         const db = client.db();

    //         try {
    //             await db.collection('newsletter').insertOne({ email });
    //             client.close();
    //         } catch (error) {
    //             client.close();
    //             res.status(500).json({ success: false, message: 'Inserting data failed' });
    //             return;
    //         }

    //         res.status(201).json({ success: true, message: 'Email added' });
    //     }
    // } else {
    //     res.status(405).end(); // Method Not Allowed
    // }
// }