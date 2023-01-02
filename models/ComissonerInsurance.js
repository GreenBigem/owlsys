const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html


const ComissionerInsuranceSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    insurance_org_name: {
        type: String,
        // reqiured требует обязательного наличия значения для свойства
        required: true,
        unique: false,
        // minlength и maxlength: задают минимальную и максимальную длину для строк
        minlength: 3,
        maxlength: 250,

    },
    procedure_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bankruptcy_procedures'
    },
    comissioner_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comissioners'
    },
    number: {
        type: String,
        required: false,
        unique: false,
    },
    date: {
        type: Date,
        required: false,
        unique: false,
    },
    period: {
        type: String,
        required: false,
        unique: false,
    },
    is_additional: {
        type: Boolean,
        required: false,
        unique: false,
        default: false
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

module.exports = mongoose.model('comissioner_insurances', ComissionerInsuranceSchema)

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению