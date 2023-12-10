export default function NamePage({title, shortDesc}) {

  return (
    <>
        <div>
            <div className="title">{title}</div>
            <div className="descSmall">{shortDesc}</div>
            <div className="author"></div>
            <div className="date"></div>
        </div>
    </>
  );
}