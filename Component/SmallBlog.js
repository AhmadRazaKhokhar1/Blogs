export default function NamePage({title, shortDesc, imgUrl, category}) {
  
  const date = new Date().toDateString();

  return (
    <>
        <div>
            <div className="title">{title}</div>
            <div className="descSmall">{shortDesc}</div>
            <div className="author">{imgUrl}</div>
            <div className="date">{`${time}/${year}/${day}/${hour}`}</div>
            <div className="date">{category}</div>
        </div>
    </>
  );
}