import React, { useCallback, useMemo, useRef } from "react";

export const FileSelector: React.FC<{
  label?: string;
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ label, onSelect, className }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const buttonLabel = useMemo(() => label ?? "選択", [label]);
  const onFileSelect = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, [inputRef]);

  return (
    <>
      <input type="file" ref={inputRef} hidden onChange={onSelect} />
      <button onClick={onFileSelect} className={className}>
        {buttonLabel}
      </button>
    </>
  );
};
