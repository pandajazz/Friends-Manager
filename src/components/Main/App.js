import React from 'react';
import './App.css';
import { Input } from './../Input/Input.js';
import Button from './../Button/Button.js';
import { ActiveFriends } from './../Active-friends/Active-friends.js';
import { InactiveFriends } from './../Inactive-friends/Inactive-friends.js';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [
        {
          name: 'Claudia',
          active: true,
        },
        {
          name: 'Mark',
          active: true,
        },
        {
          name: 'Jill',
          active: false
        }
      ],
      input: '',
    }
    
  }

  handleAddFriend = () => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([{
          name: this.state.input,
          active: true
        }]),
        input: ''
      }
    })
  }

  handleRemoveFriend = name => {
    this.setState((currentState) => {
      return {
      friends: currentState.friends.filter((friend) => friend.name !== name)
      }
    });
  }


  handleToggleFriend = name => {
    this.setState((currentState) => {
      const friend = currentState.friends.find((friend) => friend.name === name)
      return {
        friends: currentState.friends.filter((friend) => friend.name !== name)
          .concat([{
            name,
            active: !friend.active
          }])
      }
    })
  }

  updateInput = e => {
    const value = e.target.value;
    this.setState({
      input: value
    });
  }
 
  render() {

    return (
      <div>
        <Input
          name='new friend'
          type='text'
          value={this.state.input}
          onChange={this.updateInput}
        />
        <Button 
          name="Submit"
          onClick={this.handleAddFriend}
        />
        <div>
          <Button
            name="Clear All"
            onClick={() => this.setState({
            friends: []
            })} 
          />
        </div>
        <ActiveFriends
          list={this.state.friends.filter((friend) => friend.active === true)}
          onRemoveFriend={this.handleRemoveFriend}
          onToggleFriend={this.handleToggleFriend}
        />
        <InactiveFriends
          list={this.state.friends.filter((friend) => friend.active === false)}
          onToggleFriend={this.handleToggleFriend}
        />
      </div>

    )
  }

}
export default App;
