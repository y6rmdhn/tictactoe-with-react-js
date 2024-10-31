export const Button = ({ value, onclick, active }) => {
  return (
    <button className="btn" onClick={onclick} data-active={active}>
      {value}
    </button>
  );
};
