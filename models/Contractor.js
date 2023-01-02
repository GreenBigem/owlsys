const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const BankruptcyProcedureSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    contractor_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Contractors'
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

module.exports = mongoose.model('bankruptcy_procedures', BankruptcyProcedureSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению