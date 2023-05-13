import "./Alert.css";
const Alert = ({ props }) => {
  return (
    <div className="alert-container">
      <div className="alert-inner">{props.message}</div>
    </div>
  );
};
export default Alert;
