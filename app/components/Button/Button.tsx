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
    | "navigation"
    | "loading";
  click?: () => void;
  disabled?: boolean;
};

export const Button = ({ buttonName, buttonStyle, click, disabled=false }: ButtonProps) => {
  return (
    <>
      <button className={`button ${buttonStyle}`} onClick={click} disabled={disabled}>
        {buttonName}
      </button>
    </>
  );
};
