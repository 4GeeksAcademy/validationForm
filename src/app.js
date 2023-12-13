/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  let form = document.querySelector(".container-fluid");

  // Add event listener for form submit
  form.addEventListener("submit", event => {
    // Prevent the form from submitting
    event.preventDefault();

    const card = document.getElementById("Card");
    const CVC = document.getElementById("CVC");
    const amount = document.getElementById("amount");
    const firstname = document.getElementById("FirstName");
    const lastname = document.getElementById("LastName");
    const city = document.getElementById("city");
    const inputstate = document.getElementById("inputState");
    const postalcode = document.getElementById("postalcode");
    const paymentmethod = document.getElementById("paymentmethod");
    const message = document.getElementById("message");

    const Sendbutton = document.getElementById("Sendbutton");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      validateInputs();
    });

    const validateInputs = () => {};

    let inputs = [
      card,
      CVC,
      amount,
      firstname,
      lastname,
      city,
      inputstate,
      postalcode,
      paymentmethod,
      message
    ];
    inputs.forEach(input => {
      input.style.backgroundColor = "";
    });

    // Validation errors
    let errors = {
      Card: "Card Number",
      CVC: "Card CVC",
      amount: "Amount",
      Firstname: "First Name",
      Lastname: "Last Name",
      city: "City",
      inputState: "State",
      postalcode: "Postal Code",
      message: "Message"
    };

    let hasErrors = false;

    // Validate inputs
    for (let input of inputs) {
      let fieldName = input.id;

      // Check if the input is the state select dropdown
      if (input === stateInput) {
        if (input.value === "Pick a state...") {
          input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
          hasErrors = true;
          document.getElementById("alerty").innerHTML =
            "Please review the following: " + errors[fieldName];
        }
        // Check if input of cardInput is 16 length
      } else if (input === card) {
        if (input.value.trim().length !== 16) {
          input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
          hasErrors = true;
          document.getElementById("alerty").innerHTML =
            "Please review the following: " + errors[fieldName];
        }
      } else if (input === CVC) {
        if (input.value.trim().length < 3) {
          input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
          hasErrors = true;
          document.getElementById("alerty").innerHTML =
            "Please review the following: " + errors[fieldName];
        }
      } else if (!input.value.trim()) {
        // For other inputs, check if they are empty
        input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
        hasErrors = true;
        document.getElementById("alerty").innerHTML =
          "Please review the following: " + errors[fieldName];
      }
    }

    if (!hasErrors) {
      alert("Successfully submitted!");
      event.target.submit();
    }
  });
});
