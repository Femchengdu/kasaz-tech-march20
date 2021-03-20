import { useState } from "react";

const useDisplayMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return [isOpen, setIsOpen];
};

export default useDisplayMenu;
