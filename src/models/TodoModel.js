'use strict';

const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,`'{PATH}' field required!!!`]
    },
    content:{
        type:String,
        required:[true,`'{PATH}' field required!!!`]
    },
    isDone:{
        type:Number,
        default:0,
        required:[true,`'{PATH}' field required!!!`]
    },
    status:{
      type:Number,
      default:1
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
    updatedDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("todo",TodoSchema);