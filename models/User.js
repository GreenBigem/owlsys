const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        // reqiured требует обязательного наличия значения для свойства
        required: false,
        unique: false,
        default: 'Аноним',
        // minlength и maxlength: задают минимальную и максимальную длину для строк
        minlength: 3,
        maxlength: 100,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email_verified_at: {
        type: String,
        required: false,
        unique: false,
        default: undefined
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    created_at: {
        type: Date,
        required: false,
        unique: false,
        default: new Date()
    },
    deleted_at: {
        type: Date,
        required: false,
        unique: false,
        default: null
    }
});

module.exports = mongoose.model('users', UserSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению