import run from "../Database/dataBase.js";
import blogModel from "../models/blogModel.js";


export const blogController = {
    //posting the blogs to Data Base!
postBlog: async(req, res)=>{
try {
     await run();
    const newBlog = new blogModel({
        title:            req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription:  req.body.longDescription,
        imageUrl:         req.body.imageUrl,
        author:           req.body.author,
        category:         req.body.category,

    });

    const result = await newBlog.save();

    res.status(200).send({
        success:true,
        message:"Blog successfully posted!",
        blogData:result,
    })
} catch (error) {
    console.log(`There was an error in postBlog ::> ${error}`);
    return res.status(500).send({
        success:false,
        message:"There was an Internal Server Error!"
    })
}
},

fetchBlogs:async(req, res)=>{
    try {
        await run();

        const data = await blogModel.find({});

        res.status(200).send({
            success:true,
            message:"Data fetched successfully!",
            data,
        })
    } catch (error) {
        console.log(`There was an error in fetchBlog ::> ${error}`);
        res.status(500).send({
            success:false,
            message:"There was an Internal Server Error!"
        })
    }
}

}
