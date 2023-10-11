const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function getData() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db("School");
        const collection = database.collection("students");
        return collection;
    } catch (error) {
        throw error;
    }
}
module.exports = getData
async function insertData() {
    try {
        const collection = await getData();
       const result =  await collection.insertOne({ name: 'samsung', age: 13 });
       if(result.acknowledged){
        console.log("added data")
       }else{
        console.log('something went wrong')
       }
      
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        await client.close();
        console.log("Connection to MongoDB closed");
    }
}

const update= async()=>{
        const db = await getData();
        result = await db.updateOne({name:'mohit'}, {$set:{name:'rajkumar', age:30}} );
        console.log(result)
       
}
// 0
const del =  async ()=>{
  const db = await getData();
  result = await db.deleteOne({name:'rajkumar'})
}
del()
// insertData().catch(console.error);
