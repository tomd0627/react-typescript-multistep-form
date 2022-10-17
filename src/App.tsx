import "./assets/style.scss";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((previous) => {
      return { ...previous, ...fields };
    });
  };
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, prev, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      const submitMessage = document.querySelector(".submit-message");

      submitMessage?.classList.add("show");
    }
  };

  return (
    <div className="App h-100">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
              <form
                onSubmit={onSubmit}
                className="w-50 h-75 border p-5 position-relative"
              >
                <div className="steps position-absolute top-0 end-0 p-3">
                  {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="d-flex justify-content-end">
                  {!isFirstStep && (
                    <button
                      type="button"
                      onClick={prev}
                      className="mx-1 btn btn-primary"
                    >
                      Back
                    </button>
                  )}
                  <button type="submit" className="mx-1 btn btn-primary">
                    {isLastStep ? "Finish" : "Next"}
                  </button>
                </div>
                <div
                  className="submit-message my-3 alert alert-success alert-dismissible fade"
                  role="alert"
                >
                  <b>
                    <i className="fas fa-check-circle"></i> Congratulations.
                  </b>{" "}
                  Your account has been created successfully.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
