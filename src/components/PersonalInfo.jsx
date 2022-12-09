import useFormContext from "./hooks/useFormContext";

export default function PersonalInfo() {
  const { data, handleChange } = useFormContext();
  return (
    <div className="PersonalInfo">
      <div className="form-input">
        <label htmlFor="personalName">Name</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="personalName"
          id="personalName"
          value={data.personalName}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="personalSurname">Surname</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="personalSurname"
          id="personalSurname"
          value={data.personalSurname}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="personalAge">Age</label>
        <input
          className="form-input-field"
          type="number"
          min="1"
          max="100"
          required
          name="personalAge"
          id="personalAge"
          value={data.personalAge}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
