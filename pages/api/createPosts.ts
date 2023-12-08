import type {NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
type postProps={
    title: string
} 

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse 
){
    
    try {
        const post : postProps= JSON.parse(req.body)
        if (req.method==='post') {
            try{
                const data = await prisma.post.create({
                    data: {
                        title: post.title
                    }
                })
            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
 
}