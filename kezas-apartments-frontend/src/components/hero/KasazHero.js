import React from "react";

const KasazHero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

KasazHero.defaultProps = {
  hero: "defaultHero",
};

export default KasazHero;
