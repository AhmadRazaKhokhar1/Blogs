export default function NamePage({title, shortDesc, imgUrl, category}) {

  return (
    <>
        <div>
            <div className="title">{title}</div>
            <div className="descSmall">{shortDesc}</div>
            <div className="author">{imgUrl}</div>
            <div className="date">{ti}</div>
            <div className="date">{category}</div>
        </div>
    </>
  );
}