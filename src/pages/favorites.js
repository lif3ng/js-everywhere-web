import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites -- Notedly';
  });
  return <div>my favorites</div>;
};

export default Favorites;
