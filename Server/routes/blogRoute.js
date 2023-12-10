import express from 'express';
import { blogController } from '../controllers/blogController.js';
const blogRouter = express.Router();

blogRouter.post('/blog/post', blogController.postBlog);
blogRouter.get('/blog/fetch', blogController.fetchBlogs);

export default blogRouter;
