import mongoose from 'mongoose'

// Defining Schema
const bookSchema = new mongoose.Schema({
    title : { type: String, required: true, trim: true},
    author : { type: String, required: true, trim: true},
    ISBN : { type: String, required :true, trim: true }
})

const BookModel = mongoose.model('book', bookSchema)

export default BookModel