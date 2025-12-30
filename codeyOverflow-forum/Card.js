import React from 'react';
import Header from './Header';
import Body from './Body';

function Card({ commentObject }) {
  const { profileImg, username, comment } = commentObject;
  return (
    <>
      <Header profileImg={profileImg} username={username} />
      <Body comment={comment} />
    </>
  );
}

export default Card;
