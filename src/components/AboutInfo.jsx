import useFormContext from "./hooks/useFormContext";

export default function AboutInfo() {
  const { data, handleChange } = useFormContext();
  return (
    <div className="AboutInfo">
      <div className="form-input">
        <label htmlFor="aboutStudy">Where do you study?</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="aboutStudy"
          id="aboutStudy"
          value={data.aboutStudy}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="aboutWork">Where do you work?</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="aboutWork"
          id="aboutWork"
          value={data.aboutWork}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
