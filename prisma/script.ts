import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here


  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice3',
  //     email: 'alice3@prisma.io',
  //   },
  // })
  // console.log(user)



  // const users2 = await prisma.user.findMany()
  // console.log(users2)




  // const users3 = await prisma.user.create({
  //   data:{
  //     name: 'Bob',
  //     email: 'ttt@prisma.io',
  //     posts:{
  //       create:{
  //         title:'Hello World'
  //       }
  //     }
  //   }
  // })

  // console.log(users3)


  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
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