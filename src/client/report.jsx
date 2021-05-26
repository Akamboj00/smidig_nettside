import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { InputField } from "../components/inputField";
import Select from "react-select";

import { Sunbell } from "url:../components/img/sunbell_image.png";

export function Report() {
  const partOptions = [
    { value: "Battery", label: "Battery" },
    { value: "SolarPanel", label: "SolarPanel" },
    { value: "Lamp", label: "Lamp" },
  ];
  const productOptions = [
    {
      value: "Sunbell",
      label: (
        <div>
          <img src={Sunbell} alt={"Photo"} /> {"Sunbell"}
        </div>
      ),
    },
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

          <form className={"reportForm"}>
            <label>
              Select a Product:
              <Select options={productOptions} />
            </label>

            <InputField
              label={"RegistrationNumber"}
              placeholder={"RegistraionNumber"}
            />

            <label>
              Select a part:
              <Select
                placeholder={"Select parts you fixed"}
                options={partOptions}
                closeMenuOnSelect={false}
                isMulti
              />
            </label>

            <div>
              <button>
                <h5> Send Report</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
