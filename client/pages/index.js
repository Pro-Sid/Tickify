const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>Welcome back, {currentUser.email}!</h1>
  ) : (
    <h1>Welcome to our site! Please sign up or log in.</h1>
  );
};

export default LandingPage;
