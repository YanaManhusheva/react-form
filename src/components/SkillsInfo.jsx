import useFormContext from "./hooks/useFormContext";

export default function SkillsInfo() {
  const { data, handleChange } = useFormContext();
  return (
    <div className="SkillsInfo">
      <div className="form-input">
        <label htmlFor="skillsLang">Which languages do you speak?</label>
        <input
          className="form-input-field"
          type="textarea"
          required
          name="skillsLang"
          id="skillsLang"
          value={data.skillsLang}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="skillsProg">
          Which programming languages do you know?
        </label>
        <input
          className="form-input-field"
          type="textarea"
          required
          name="skillsProg"
          id="skillsProg"
          value={data.skillsProg}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
