import useFormContext from "./hooks/useFormContext";

export default function UserInfo() {
  const { data, handleChange } = useFormContext();
  return (
    <div className="UserInfo">
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="username"
          id="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="useremail">Email</label>
        <input
          className="form-input-field"
          type="text"
          required
          name="useremail"
          id="useremail"
          value={data.useremail}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="userpassword">Password</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="userpassword"
          id="userpassword"
          value={data.userpassword}
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="userconfirm">Confirm Password</label>
        <input
          className="form-input-field"
          type="text"
          pattern="[A-Za-zd.]{2,}"
          required
          name="userconfirm"
          id="userconfirm"
          value={data.userconfirm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
