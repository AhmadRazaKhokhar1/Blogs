'use client'
import axios from 'axios';
import { useState } from 'react';
export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuhtor] = useState('');
  
  const postBlog = async(e) => {
    e.preventDefault();

    try {
      const postResponse = await axios.post('http://localhost:8000/api/blog/post', {
          title,
          shortDescription,
          longDescription,
          imageUrl,
          category,
          author
      });
      console.log(postResponse)
    } catch (error) {
      console.log(`There was an Error in postBlog function ::> ${error}`)
    }
  }
  return (
    <div>
      <h1 className='fs-2 text-info text-center fw-bold'>Admin Panel</h1>
      <br/>
      <form
       onSubmit={postBlog}
       className='d-flex flex-column mx-auto shadow p-5 align-items-center w-75 px-2 rounded-lg mt-5'
       >
        <h1 className='fs-3 text-info'>Upload Your Blogs Here</h1>
     <input 
     type="text" 
     className="form-control w-75 rounded my-2" 
     id="inputPassword2" 
     placeholder="Enter your title" 
     onChange={(e)=>setTitle(e.target.value)} 
     value={title}/>
     <textarea
     type="text" 
     className="form-control w-75 rounded my-2" 
     id="inputPassword2" 
     placeholder="Describe in short description" 
     onChange={(e)=>setShortDescription(e.target.value)} 
     value={shortDescription}
     rows={5}
     style={{resize:'none'}}
     />
    <textarea 
     type="text" 
     className="form-control w-75 rounded my-2 " 
     id="inputPassword2" 
     placeholder="Describe in long description..." 
     onChange={(e)=>setLongDescription(e.target.value)} 
     value={longDescription}
     style={{resize:'none'}
    }
    rows='12'
     />
      <input 
     type="text" 
     className="form-control w-75 rounded my-2" 
     id="inputPassword2" 
     placeholder="Enter your hosted image's URL" 
     onChange={(e)=>setImageUrl(e.target.value)} 
     value={imageUrl}/>
     <input 
     type="text" 
     className="form-control w-75 rounded my-2" 
     id="inputPassword2" 
     placeholder="Enter your blog's catergory" 
     onChange={(e)=>setCategory(e.target.value)} 
     value={category}/>
     <input 
     type="text" 
     className="form-control w-75 rounded my-2" 
     id="inputPassword2" 
     placeholder="Enter Author's name" 
     onChange={(e)=>setAuhtor(e.target.value)} 
     value={author}/>
    
    <button
    type='submit'
    className='btn btn-info w-25 mx-auto text-info '

    >
      Add Post
    </button>
    </form>
    <br/>
    <br/>
    </div>
  );
}