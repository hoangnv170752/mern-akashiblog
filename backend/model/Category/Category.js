const mongoose = require('mongoose');

const categoryScheme = new mongoose.Scheme(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categoryScheme);
module.exports = Category;