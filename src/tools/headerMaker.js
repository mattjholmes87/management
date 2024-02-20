export const headerMaker = (input) => {
  const inputArray = Array.from(input);
  const headings = inputArray.map((letter, index) => (
    <span key={index}>{letter}</span>
  ));
  return (
    <h1 className="multiColorHeader">
      <p>{headings}</p>
    </h1>
  );
};
