import React, { createContext, useEffect, useState } from "react";

export const MainRefContext = createContext();

export const MainRefProvider = (props) => {
  const [mainRef, setMainRef] = useState(null);
  const [footerRef, setFooterRef] = useState(null);

  useEffect(() => {
    let ref = document.querySelector(".main-content");
    setMainRef(ref);
    ref = document.querySelector(".footer-grid");
    setFooterRef(ref);
  }, []);

  return (
    <MainRefContext.Provider value={[mainRef, footerRef]}>
      {props.children}
    </MainRefContext.Provider>
  );
};
