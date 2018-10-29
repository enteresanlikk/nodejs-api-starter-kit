'use strict';
import Mongoose from 'mongoose';

export function Connect(Uri){
    const Options = {
        useNewUrlParser: true
    };
    Mongoose.connect(Uri, Options);
    Mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected');
    });
    Mongoose.connection.on('error',function(err){
        console.error(`MongoDB: ${err}`);
    });
}