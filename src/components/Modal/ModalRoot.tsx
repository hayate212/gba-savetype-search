import React from "react";

export const ModalRoot: React.FC<{ className?: string }> = React.memo(
  ({ className, children }) => {
    return (
      <>
        {children}
        <div id="modal-root" className={className}></div>
      </>
    );
  }
);
ModalRoot.displayName = "ModalRoot";
