const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const ComissionerExtensionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    procedure_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bankruptcy_procedures'
    },
    court_act_date: {
        type: Date,
        required: false,
        unique: false,
    },
    consideration_date: {
        type: Date,
        required: false,
        unique: false,
    }
});

module.exports = mongoose.model('comissioner_extensions', ComissionerExtensionSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению