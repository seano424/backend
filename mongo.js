const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

// const password = '86e6z7NsMJMJHyw'
const url = `mongodb+srv://sean:${password}@cluster0.bkrtk.mongodb.net/phonebookV2?retryWrites=true&w=majority`
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const personData = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

const Person = mongoose.model('Person', personData)

if (name) {
  const person = new Person({
    name: name,
    number: number,
    date: new Date(),
  })

  person.save().then((result) => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}

if (!name) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}
