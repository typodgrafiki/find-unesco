import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function POST(req: NextRequest, res: NextResponse) {
    const prisma = new PrismaClient()

    const url = new URL(req.url || "")
    const emailAdress: string = url.searchParams.get("email") ?? ""
    let response = {}

    console.log("check0")

    if (emailAdress) {
        async function main() {
            await prisma.user.create({
                data: {
                    email: emailAdress,
                },
            })
        }

        try {
            await main()
                .then(async (res) => {
                    response = {
                        success: true,
                        message: "Its OK",
                        email: emailAdress,
                    }

                    console.log("check1 ")
                    console.log(res)

                    await prisma.$disconnect()
                })
                .catch(async (e) => {
                    response = {
                        success: false,
                        message: "Nie dodano",
                        email: emailAdress,
                    }
                    console.log(e)
                    await prisma.$disconnect()
                })
                .finally(async () => {
                    console.log("check3")
                    await prisma.$disconnect()
                })
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log("no email")
    }
    return NextResponse.json(response)
}
