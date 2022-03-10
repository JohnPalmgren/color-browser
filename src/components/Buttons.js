import classes from "./Buttons.module.css";

const Buttons = ({ updateState }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
        <button onClick={updateState.bind(this, "crayola")}>
          Crayola Colors
        </button>
        <button onClick={updateState.bind(this, "xkcd")}>XKCD Colors</button>
        <button onClick={updateState.bind(this, "web")}>Web Colors</button>
      </div>
      <div className={classes.buttons}>
        <button onClick={updateState.bind(this, "clear")}>Clear Colors</button>
      </div>
    </div>
  );
};

export default Buttons;
