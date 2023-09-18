export default function Navbar({ queryHandler }) {
  const type = (e) => {
    const str = e.target.value;
    //alert(str)
    queryHandler(str);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container-fluid">
          <a className="navbar-brand">NotesApp</a>
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={type}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
