import Link from "next/link"
export const Navbar = () => {
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Navbar</Link>
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/AdminPanel">Admin Panel</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

  </div>
</nav>
    </>
    )
}