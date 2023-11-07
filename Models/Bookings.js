const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    check_in_date: {
        type: String,
        required: true
    },
    check_out_date: {
        type: String,
        required: true
    },
    no_of_rooms:{
        type: Number,
        required: true
    },
    type_of_room:{
        type: String,
        required: true
    },
    booking_date:{
        type: String,
        required: true
    },
    amount: {
        type:  Number,
        required: true
    },
    payment_status:{
        type:  String,
        required: true
    }
    
});

module.exports = mongoose.model('Bookings', BookingSchema, 'Bookings');