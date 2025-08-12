const { Schema, model } = require('mongoose');

const booksSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    publishedYear:{
        type: String,
        required: true,
        trim: true
    },
    genre:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    imageUrl:{
        type: String,
        required: true,
        trim: true
    },
    bookUrl:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const Book = model('Book', booksSchema);
module.exports = Book;