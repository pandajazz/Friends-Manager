import React from 'react';
import Button from '../Button/Button';

export const InactiveFriends = ({
    list,
    onToggleFriend
  }) => {
    return (
      <div>
        <h2>Inactive Friends</h2>
        <ul>
          {list.map((friend) => (
            <li key={friend.name}>
              <span>{friend.name}</span>
              <Button 
                name= "Activate"
                onClick={() => onToggleFriend(friend.name)} />
            </li>
          ))}
        </ul>
      </div>
    )
  }