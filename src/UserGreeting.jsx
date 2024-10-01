// Condition true Welcome yourname false Please logged in
function UserGreeting(props) {
  if (props.isLoggedIn === true) {
    return <h2>Welcome to {props.name}</h2>;
  } else {
    return <h2>Please Logged In!</h2>;
  }
}
export default UserGreeting;
