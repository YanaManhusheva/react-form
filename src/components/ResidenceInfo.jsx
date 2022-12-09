import useFormContext from "./hooks/useFormContext";

export default function ResidenceInfo() {
  const { data, handleChange } = useFormContext();
  return (
    <div className="ResidenceInfo">
      <div className="form-input">
        <label htmlFor="residenceCountry">Country</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="residenceCountry"
          id="residenceCountry"
          value={data.residenceCountry}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="residenceCity">City</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="residenceCity"
          id="residenceCity"
          value={data.residenceCity}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="residenceDistrict">District</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="residenceDistrict"
          id="residenceDistrict"
          value={data.residenceDistrict}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
