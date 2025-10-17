import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, userName = "Guest" }) {
    const welcomeMessage = <h2 className="WelcomeMessage">Welcome, {userName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2> ;

    return (isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired,
    userName : PropTypes.string.isRequired,
}
export default UserGreeting