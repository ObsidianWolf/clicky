import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };
  
  clickFriend = id => {
    console.log(id);
    let didLose = false;
  
    const friends = this.state.friends.map(friend => {

      if(id === friend.id){
        if(friend.clicked) didLose = true;
        //give me all the existing friend but change the value of clicked to true
        //friend.clicked = true; is bad and mutates the state of the object
        return {...friend, clicked: true}
      }
      return friend;
    })
    if(didLose){
      //handle game over

    }else{

      this.setState(prevState => {
        return{
          friends, 
          score: prevState.score + 1
        }
      });
    }
    // Set this.state.friends equal to the new friends array
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky-Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}
console.log(friends.handleIncrement);

export default App;
