import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { InputField } from "../inputField";
import Select from "react-select";
import "./report.css";

export function Report() {
  const partOptions = [
    { value: "Battery", label: "Battery" },
    { value: "SolarPanel", label: "SolarPanel" },
    { value: "Lamp", label: "Lamp" },
  ];
  const productOptions = [
    { value: "Sunbell", label: "Sunbell" },
    { value: "MoveSmart", label: "MoveSmart" },
    { value: "Start", label: "Start" },
    { value: "SunTurtle", label: "SunTurtle" },
    { value: "Home", label: "Home" },
  ];
  return (
    <div id={"container_main"}>
      <div className={"container_inner"}>
        <div>
          <h1>This is the report page</h1>

          <Link to="../img/test.png" target="_blank" download>
            <Button>Download</Button>
          </Link>
          <div className={"reportFormContainer"}>
            <form className={"reportForm"}>
              <div className={"productOption_container"}>
                <label className={"productOption"}>
                  Select a Product:
                  <Select
                    options={productOptions}
                    placeholder={"Select a product"}
                  />
                </label>
              </div>
              <div className={"registrationNumberContainer"}>
                <InputField
                  className={"RegistrationNumber"}
                  label={"RegistrationNumber"}
                  placeholder={"RegistraionNumber"}
                />
              </div>
              <div className={"partOption_container"}>
                <label className={"partOption"}>
                  Select a part:
                  <Select
                    placeholder={"Select parts you fixed"}
                    options={partOptions}
                    closeMenuOnSelect={false}
                    isMulti
                  />
                </label>
              </div>
              <div className={"reportButton_container"}>
                <button className={"reportButton"}>
                  <h5 className={"center"}> Send Report</h5>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
