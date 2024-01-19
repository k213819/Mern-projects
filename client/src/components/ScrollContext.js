import React, { createContext, useState } from 'react';

const ScrollContext = createContext({
  boxTop: 0,
  setBoxTop: () => {},
});

export const ScrollProvider = ({ children }) => {
  const [boxTop, setBoxTop] = useState(0);

  return (
    <ScrollContext.Provider value={{ boxTop, setBoxTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;