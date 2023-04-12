import { PropsWithChildren } from "react";

interface Props {
  type?: "default" | "primary";
  size?: "large" | "middle" | "small";
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Button = ({
  type = "default",
  size = "middle",
  style,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  const typeStyle: {
    [key in Exclude<Props["type"], undefined>]: React.CSSProperties;
  } = {
    default: { border: "1px solid aqua", backgroundColor: "white" },
    primary: { border: "1px solid black", backgroundColor: "aqua" },
  };

  const sizeStyle: {
    [key in Exclude<Props["size"], undefined>]: React.CSSProperties;
  } = {
    large: { width: "200px", height: "100px" },
    middle: { width: "100px", height: "50px" },
    small: { width: "50px", height: "25px" },
  };

  return (
    <button
      style={{ ...typeStyle[type], ...sizeStyle[size], ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
