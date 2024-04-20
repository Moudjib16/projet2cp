const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    depart: {
        type : String,
        default: 'Setif'
    },
    depart0: {
        type : String,
        default: 'Ain Arnet'
    },
    arrivee: {
        type : String,
        default: 'Bejaia'
    },
    arrivee0: {
        type : String,
        default: 'Amizour'
    },
    dateData: {
        type : String,
        default: Date.now
    },
    time: {
        type : String,
        default: '12:00'
    },
    price: {
        type : String,
        default: '200DA'
    },
    places: {
        type : Number,
        default: 0
    },
    places_taken: {
        type : Number,
        default: 0
    },
    description:{
        type: String,
        default: "Bonjour ! je vais voir ma famille . J'ai beaucouop de place dans le coffre ." 
    },
    driver: {
        type : String,
        default: 'none'
    },
}, { timestamps: true });

const trip = mongoose.models.trip || mongoose.model('trip', Schema);

module.exports = trip;