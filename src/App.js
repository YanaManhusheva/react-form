import "./App.css";

import Form from "./components/Form";
import { FormProvider } from "./context/FormContext";
import { useTheme, useThemeUpdate } from "./context/ThemeContext";

function App() {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className="App">
      <button className="toggle-btn" onClick={toggleTheme}>
        Change Mode
      </button>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
