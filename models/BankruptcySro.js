const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const BankrtuptcySroSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: false,
        minlength: 3,
        maxlength: 250,
    },
    address: {
        type: String,
        required: false,
        unique: false,
        minlength: 3,
        maxlength: 250,
    },
    rosreestr_registry_number: {
        type: Number,
        required: false,
        unique: false,
    },
    rosreestr_registry_date: {
        type: Date,
        required: false,
        unique: false,
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

module.exports = mongoose.model('bankruptcy_sros', BankrtuptcySroSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению