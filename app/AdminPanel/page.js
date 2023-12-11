'use client'
import axios from 'axios';
import { TextField, Button } from '@mui/material';
// import SendIcon from '@mui/icons-material'
import { useState } from 'react';
export default function AdminPanel() {
  const [title, setTitle] = useState('');
  
  const postBlog = async() => {
    try {
      const postResponse = await axios.post('http://localhost:8000/api/blog/post', {
          title,
      })
      console.log(postResponse)
    } catch (error) {
      console.log(`There was an Error in postBlog function ::> ${error}`)
    }
  }
  return (
    <div>
      <h1>Upload Your Blogs Here</h1>
      <TextField 
      id="outlined-basic" 
      label="Title" 
      variant="outlined" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <TextField 
      id="outlined-basic" 
      label="Short Description" 
      variant="outlined" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <TextField 
      id="outlined-basic" 
      label="Long Description" 
      variant="outlined" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <TextField 
      id="outlined-basic" 
      label="Author" 
      variant="outlined" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <TextField 
      id="outlined-basic" 
      label="Category" 
      variant="outlined" 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <Button variant="contained" color='success' }  onClick={postBlog}>
          Post Blog Now
      </Button>
    </div>
  );
}