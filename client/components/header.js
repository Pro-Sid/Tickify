export default ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Ticketing
      </a>
      <div className="d-flex justify-content-end">
        {currentUser ? (
          <a className="nav-link" href="/auth/signout">
            Sign Out
          </a>
        ) : (
          <>
            <a className="nav-link" href="/auth/signin">
              Sign In
            </a>
            <a className="nav-link" href="/auth/signup">
              Sign Up
            </a>
          </>
        )}
      </div>
    </nav>
  );
};
