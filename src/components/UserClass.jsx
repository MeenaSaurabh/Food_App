import React from "react";

// Class-Based Component is a normal JS Class which "extends React.Component {}" and has a "render(){}" method that returns JSX

class UserClass extends React.Component {
  constructor(props) {
    super(props); // super() is mandatory/compulsory & should be written at top, otherwise error will come.
    
    console.log(this.props.name + "child constructor will print");
    
    // State variable - Big JS object
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy",
        location: "dummy",
        // avatar_url:""
      },
    };

  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/MeenaSaurabh");
    const json = await data.json();
    console.log(json);

    this.setState({  // will update the Dummy data
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component Did Update");  // will print on changing variable(count) or setState({})
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    console.log(this.props.name + "child render will print");

    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;  // will show Dummy data
    
    const { count } = this.state;


    return (
      <div className="user-card">
        {/* <h1>Name:{this.props.name}</h1> */}
        <img src={avatar_url} alt="" />
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>

        <p>Count = {count}</p>
        {/* <p>Count = {this.state.count2}</p> */}
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1; // this is wrong, instead use setState({})
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Inc Count
        </button>
      </div>
    );
  }
}

export default UserClass;
