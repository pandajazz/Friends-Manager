import React from 'react';
import Button from '../Button/Button';

export const ActiveFriends = ({
    list,
    onRemoveFriend,
    onToggleFriend
  }) => {
    return (
      <div>
        <h2>Active Friends</h2>
        <ul>
          {list.map((friend) => (
            <li key={friend.name}>
              <span>{friend.name}</span>
              <br />
              <Button 
                name= "Remove"
                onClick={() => onRemoveFriend(friend.name)} />
              <Button 
                name= "Deactivate"
                onClick={() => onToggleFriend(friend.name)} />
            </li>
          ))}
        </ul>
      </div>
    )
  }