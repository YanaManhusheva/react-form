import FormInputs from "./FormInputs";
import useFormContext from "./hooks/useFormContext";

export default function Form() {
  const {
    title,
    page,
    setPage,
    data,
    setData,
    handleChange,
    canSubmit,
    disableNext,
    disablePrev,
  } = useFormContext();
  function handleNext() {
    setPage((prev) => prev + 1);
  }
  function handlePrev() {
    setPage((prev) => prev - 1);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  console.log(canSubmit);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h2 className="title">{title[page]}</h2>
          <div className="buttons">
            <div className="navigation-btn">
              <button
                type="button"
                onClick={handlePrev}
                disabled={disablePrev}
                className="form-btn"
              >
                {" "}
                Prev{" "}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={disableNext}
                className="form-btn"
              >
                Next{" "}
              </button>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="form-btn submit-btn"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
          <FormInputs />
        </div>
      </form>
    </div>
  );
}
