import { PrismaClient }  from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

async function main() {
    //prisma queries creating, updating, fetching amd deleting data

                //CREATE USER
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Jide",
    //         email: "jide@email.com"
    //     }
    // })
        // console.log(user)

   // GET ALL USERS
    // const users = await prisma.user.findMany({
    //     include: {
    //          articles: true,   // to add article to the users details
    //     }
    // });
    //     console.log(users)

    //UPDATE USER
    // const user = await prisma.user.update({
    //     where: {
    //         id: 2,
    //     },
    //     data: {
    //         name: "maryam oladipo"
    //     }
    // })

    // console.log(user)

    //CREATE USER AND ASSOCIATE IT WITH THE ARTICLE(S)
        // const user = await prisma.user.create({
        //     data: {
        //         name: "maryam",
        //         email: 'maryam@gmail.com',
        //         articles: {
        //             create: {
        //                 title: "maryam's article",
        //                 body: "this is meeee"
        //             }
        //         }
        //     }
        // })
        //         console.log(user)


    //GET ALL ARTICLES
        // const articles = await prisma.article.findMany()
        // console.log(articles)

    //CREATE ARTICLE AND ASSOCIATE IT TO THE USER CALLING CONNECT
        
                    //ARTICLE 1
            // const article = await prisma.article.create({
            //     data: {
            //         title: "favour's article",
            //         body: "thiisssssss favour",
            //         author: {
            //             connect: {
            //                 id: 1
            //             }
            //         }

            //     }
            // })
            //         console.log(article)

                    //ARITCLE 2 create article and connect to user Id: 1
            // const article = await prisma.article.create({
            //     data: {
            //         title: "jide's article",
            //         body: "thiisssssss",
            //         author: {
            //             connect: {
            //                 id: 1
            //             }
            //         }

            //     }
            // })
            //         console.log(article)


    //LOOP OVER USERS, TO BE ABLE TO VISUALIZE THE ARTICLE USING/ON CONSOLE.LOG
    // users.forEach((user) => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`)
    //     console.log("Articles:")
    //     user.articles.forEach((article) => {
    //         console.log(`-Title: ${article.title}, Body: ${article.body} `)
    //         console.log('/n')
    //     })
    // })

    //REMOVE/DELETE ARTICLE/USER
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 1,
    //     }
    // })

    //     console.log(`removed article: ${article}`)
    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch( async (e) => {
        console.error(e)
        await prisma.$disconnect();
        process.exit(1);
    })