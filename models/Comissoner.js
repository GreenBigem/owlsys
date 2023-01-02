const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const ComissionerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contractor_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Contractors'
    },
    sro_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bankruptcy_sros'
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

module.exports = mongoose.model('comissioners', ComissionerSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению