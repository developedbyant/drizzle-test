import db from "./db"
import { books, users } from "./db/schema"

const user = await db.query.users.findFirst({
    with:{
        books:true
    }
})
const book = await db.query.books.findFirst({
    
})

// if not found, create new one
if(!user){
    const newUser = await db.insert(users).values({
        fullName:"Test one",
        role:"admin",
        email:"test@gmail.com",
        password:"123",
    })
    console.log(newUser)
}
else{
    console.log(user)
}
// if not found, create new one
if(!book){
    const newBook = await db.insert(books).values({ title:"Book test",byUserId:1})
    console.log(newBook)
}
else{
    console.log(book)
}

// console.log(book)