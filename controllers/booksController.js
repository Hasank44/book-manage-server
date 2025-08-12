const Book = require('../models/books');

exports.booksGetController = async ( req, res ) =>{
    const books = (await Book.find({}));
    try {
        if(books.length >= 1){
            res.status(200).json({
            message:'You Can Now View Your Data',
            books,
        })
        }else{
            res.status(404).json({
            message:'Book Not Found'
        })
    }
} catch (error) {
    res.status(500).json({
        message:'Book Get Failed',
        error
    });
};
};
exports.booksGetFindController = async ( req, res ) =>{
try {
    const { id } = await req.params;
    const finded = await Book.findOne({ _id: id});
    if(finded){
        res.status(200).json({
        message:'Book One Get Successfull',
        finded
    })
    }else{
        res.status(404).json({
        message:'Book Not Found'
        })
    }
    } catch (error) {
        res.status(500).json({
            message:'Book One Get Failed',
            error
        });
    }
}
exports.booksPostController = async ( req, res ) =>{
    const postData = req.body;

    try {
        const book = new Book(postData);
        await book.save();

        res.status(200).json({
            message:'Book Add Successfull',
            book
        })
    } catch (error) {
        res.status(500).json({
            message:'Book Add Failed',
            error
        });
    };

};
exports.booksUpdateController = async ( req, res ) =>{
    const { id } = req.params;
    const { title, author, publishedYear, genre, price, description, imageUrl, bookUrl } = req.body;
    try {
       const updated = await Book.findOneAndUpdate({
        _id: id
        },{ $set:{
            title, author, publishedYear, genre, price, description, imageUrl, bookUrl
        }},
        {new: true})
        res.status(200).json({
            message:'Book Update Successfull',
            updated
        })
    } catch (error) {
        res.status(500).json({
            message:'Book Update Failed',
            error
        });
    };
};
exports.booksDeleteController = async ( req, res ) =>{
    const { id } = req.params;
    try {
        const deleted = await Book.findOneAndDelete({_id: id});
        res.status(200).json({
            message:'Book Delete Successfull',deleted
        });
    } catch (error) {
        res.status(500).json({
            message:'Book Delete Failed',
            error
        });
    };
};