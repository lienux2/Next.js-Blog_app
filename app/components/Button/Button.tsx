import "./Button.css"; 

type ButtonProps = {
  buttonName: string;
  buttonStyle:
    | "seePost"
    | "readMore"
    | "back"
    | "allPosts"
    | "add"
    | "delete"
    | "edit"
    | "navigation";
  click?: () => void;
};

export const Button = ({ buttonName, buttonStyle, click }: ButtonProps) => {
  return (
    <>
      <button className={`button ${buttonStyle}`} onClick={click}>
        {buttonName}
      </button>
    </>
  );
};
