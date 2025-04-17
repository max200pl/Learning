export const Button = ({ size, color, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button color="red" {...props} />;
};

export const GreenSmallButton = (props) => {
  return <Button size="small" color="green" {...props} />;
};
