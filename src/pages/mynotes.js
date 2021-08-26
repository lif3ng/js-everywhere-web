import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes -- Notedly';
  });

  return <div>my notes</div>;
};

export default MyNotes;
