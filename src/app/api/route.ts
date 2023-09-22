import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()

    const url = new URL(req.url || "")
    const emailAdress: string = url.searchParams.get("email") ?? ""
    let response = {}

    if (emailAdress) {
        async function main() {
            await prisma.user.create({
                data: {
                    email: emailAdress,
                },
            })
        }

        await main()
            .then(async () => {
                response = {
                    success: true,
                    message: "Its OK",
                    email: emailAdress,
                }
                await prisma.$disconnect()
            })
            .catch(async (e) => {
                response = {
                    success: false,
                    message: "Nie dodano",
                    email: emailAdress,
                }
                await prisma.$disconnect()
            })
            .finally(async () => {
                await prisma.$disconnect()
            })
    }
    return NextResponse.json(response)
}
