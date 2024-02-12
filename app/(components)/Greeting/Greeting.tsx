import style from "./Greeting.module.css";

export const Greeting = () => {
  return (
    <>
      <div className={style.welcomeMessage}>
        <h1 className={style.title}>Welcome to Paw in Hand!</h1>
        <p className={style.message}>
          Just as people find connection hand in hand, we believe in forging
          bonds with our pets, <br /> going{" "}
          <span className={style.brandName}>Paw in Hand</span> on the journey of
          companionship and joy.
        </p>
      </div>
    </>
  );
};
