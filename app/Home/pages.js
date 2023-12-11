import SmallBlog from '@/Component/SmallBlog.js'

import axios from "axios";

import { useState, useEffect } from 'react';
export const HomePage =()=> {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get('http://localhost:8000/api/blog/fetch')
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    return <>
    <div>
        Wow apple
        {
            data.map((e)=>{
                return <SmallBlog
                 title={e.title}
                 shortDescription={e.shortDescription}
                 longDescription={e.longDescription}
                 imageUrl={e.imageUrl}
                 category={e.category}
                 author={e.author}
                 date={e.createdAt}
                 key={e._id}
                />
            
            })
        }
    </div>
    </>
}