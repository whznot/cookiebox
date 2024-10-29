import PropTypes from "prop-types";

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Login to continue</h2>

    return props.isLoggedIn ? welcomeMessage : loginPrompt
}

UserGreeting.prototype = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting
