export default function NamePage({title, shortDescription, imageUrl, category, author, date}) {
  
  const date = new Date().toDateString();

  return (
    <>
<div class="col-md-6 mb-4">
    <div class="card">
      <img src={imageUrl} class="card-img-top" alt={{shortDescription, title}} />
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