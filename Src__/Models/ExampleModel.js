'use strict';
import mongoose from 'mongoose';

const ExampleSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    status:{
      type:Number,
      default:1
    },
    createdDate:{
        type:Date
    },
    updatedDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports= mongoose.model('example',ExampleSchema);