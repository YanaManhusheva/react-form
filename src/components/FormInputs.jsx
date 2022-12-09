import useFormContext from "./hooks/useFormContext";
import PersonalInfo from "./PersonalInfo";
import ResidenceInfo from "./ResidenceInfo";
import AboutInfo from "./AboutInfo";
import SkillsInfo from "./SkillsInfo";
import UserInfo from "./UserInfo";

export default function FormInputs() {
  const { page } = useFormContext();

  const display = {
    0: <PersonalInfo />,
    1: <ResidenceInfo />,
    2: <AboutInfo />,
    3: <SkillsInfo />,
    4: <UserInfo />,
  };

  return <div className="form-inputs">{display[page]}</div>;
}
