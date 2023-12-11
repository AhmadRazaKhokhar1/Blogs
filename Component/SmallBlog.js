import Image from "next/image";

export default function SmallBlog({title, shortDescription, imageUrl, category, author, date}) {
 
  return (
    <>
<div class="col-md-6 mb-4">
    <div class="card">
      <img  src={imageUrl} class="card-img-top img-fluid" alt={ title} />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{shortDescription}</p>
            <p class="card-text"><small class="text-muted">Author: {author} | Created At: {date}</small></p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
   </div>
</div>
    </>
  );
}