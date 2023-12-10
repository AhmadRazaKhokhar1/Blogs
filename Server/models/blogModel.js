import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    shortDescription:{
        type:String,
    },
    longDescription:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    author:{
        type:String,
    },
    category:{
        type:String,
    }
},
{
    timestamps:true,
}
);

const blogModel = new mongoose.model('blog', blogSchema);

export default blogModel;