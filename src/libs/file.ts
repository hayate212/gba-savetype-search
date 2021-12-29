export const readFile = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.readAsText(file);
    r.onload = () => {
      resolve(r.result?.toString() ?? "");
    };
    r.onerror = () => {
      reject();
    };
  });
};
