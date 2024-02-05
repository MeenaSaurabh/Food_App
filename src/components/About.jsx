import { Component } from "react"; // & then write "Component" at place of "React.Component"
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// Class-Based Component is a normal JS Class which "extends React.Component {}" and has a "render(){}" method that returns JSX

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log(
      "Parent componentDidMount will print at LAST after the component has been mounted/loaded i.e after Child-componentDidMount"
    );
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us - ClassBased Component</h1>
        <div>
          LoggedIn User -
          <UserContext.Consumer>
            {/* {(data)=> console.log(data)} */}
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={Saurabh (functional)}/> */}
        <UserClass name={"First"} location={"Bhopal"} />{" "}
        {/* Child component will load i.e UserClass */}
        <UserClass name={"Second"} location={"USA"} />
      </div>
    );
  }
}

export default About;
