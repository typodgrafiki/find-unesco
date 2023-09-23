import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET() {
    const prisma = new PrismaClient()

    async function main() {
        // await prisma.user.create({
        //     data: {
        //         name: "Alice1",
        //         email: "alice@222",
        //     },
        // })
        // const allUsers = await prisma.user.findMany()
        // console.dir(allUsers)
        // return allUsers
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

    return NextResponse.json({ what: "lol" })

    // const res =
    // const todos = await res.json()
    // return NextResponse.json(todos)

    // const res = await fetch(DATA_SOURCE_URL)
    // const todos = await res.json()
    // return NextResponse.json(todos)
}

export async function POST(request: Request) {
    const { id } = await request.json()
    return NextResponse.json(id)
}

export async function DELETE(request: Request) {
    const { id } = await request.json()
    return NextResponse.json(id)
}
