import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("#modal-root");

export const Modal: React.FC = ({ children }) => {
  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    if (modalRoot) modalRoot.appendChild(el);
  }, [el]);
  return ReactDOM.createPortal(() => <div>{children}</div>, el);
};
