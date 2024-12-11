const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const figureCollection = db.collection('figure');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addFigure(figure) {
  console.log('INSERTING ONE')
  await figureCollection.insertOne(figure);
  return figure;
}

async function replaceFigures(figures) {
  
    // Delete all existing documents in the collection
    await figureCollection.deleteMany({});
    // Insert the new figures
    if (Array.isArray(figures) && figures != []) {
    console.log('INSERTING MANY')
    await figureCollection.insertMany(figures);}
    return figures;
  }

async function editFigure(figure){
  const result = await figureCollection.updateOne(
    { id: figure.id },
    { $set: figure }
  );
  console.log(`Updated ${result.modifiedCount} documents`);
  return result;
}

async function getFigures() {
    
    const cursor = figureCollection.find();
    console.log('GETTING FIGURES')
//   console.log("CURSORTOARRAY:\n",cursor.toArray())
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addFigure,
  getFigures,
  replaceFigures
};

// async function main() {
//     await addFigure({src: "null", id: 1, name: "hello", TSV:[]})
//     const fig = await getFigures()
//     console.log("GET FIGURES:\n",fig)

// }

// main();
