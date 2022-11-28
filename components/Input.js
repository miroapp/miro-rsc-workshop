const Input = ({ label, placeholder, onChange }) => {
  return (
    <div className={"input-container"}>
      <p className={"input-label"}></p>

      <div className="form-group">
        <label>{label}</label>
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
