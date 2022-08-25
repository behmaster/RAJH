import mongoose from "mongoose";
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

//have to bring in everything as this is completely seperate from our server
dotenv.config()

connectDB()

const importData = async () => {
try {
    //use await as it returns a promise
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    //an array of the created users
    const createdUsers = await User.insertMany(users)

    //our admin user is the first user in our dataset
    const adminUser= createdUsers[0]._id

    //all products with the admin user
    const sampleProducts = products.map(products=> {
        return{...products, user: adminUser}
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()

} catch (error){
    console.error(`${error}`)
    //exit with failure
    process.exit(1)
}

}


const destroyData = async () => {
  try {
    //use await as it returns a promise
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
   

    console.log('Data Destoryed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    //exit with failure
    process.exit(1)
  }
}

if (process.argv[2] ==='d') {
    destroyData()
}else{
    importData()
}


//to run node backend/seeder -d, added to package.json in root