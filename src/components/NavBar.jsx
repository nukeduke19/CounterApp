import Value from "./Value";

const NavBar = ({ totalCount }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge rounded-pill bg-secondary">{totalCount}</span>
        </span>
        <Value />
      </div>
    </nav>
  );
};

export default NavBar;
