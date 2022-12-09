import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Personal",
    1: "Residence",
    2: "About",
    3: "Skills",
    4: "User",
  };
  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    personalName: "",
    personalSurname: "",
    personalAge: "",
    residenceCountry: "",
    residenceCity: "",
    residenceDistrict: "",
    aboutStudy: "",
    aboutWork: "",
    skillsLang: "",
    skillsProg: "",
    username: "",
    useremail: "",
    userpassword: "",
    userconfirm: "",
  });

  function handleChange(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  const canSubmit =
    [...Object.values(data)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("personal"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("residence"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("about"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage4 = Object.keys(data)
    .filter((key) => key.startsWith("skills"))
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;
  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3) ||
    (page === 3 && !canNextPage4);

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        handleChange,
        canSubmit,
        disableNext,
        disablePrev,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
