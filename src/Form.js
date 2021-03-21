import React, { useState } from "react";
import useForm from "./useForm";
import "./Form.css";

function Form() {
  const { handleSubmit, handleChange, values, errors } = useForm(submit);
  function submit() {
    console.log("Submitted Succesfully");
    alert("Submitted Succesfully")
  }
  return (
    <div class="form">
      <form noValidate>
        <div class="head">
          <h1>Pay Invoice</h1>
          <div class="card-row">
            <div className="visa"></div>
            <div className="mastercard"></div>
            <div className="amex"></div>
            <div className="discover"></div>
          </div>
        </div>
        <div class="username space icon-relative">
          <label>Card Holder</label>
          <input
            name="username"
            type="text"
            placeholder="Full Name"
            value={values.username}
            onChange={handleChange}
          />
          <i class="fas fa-user"></i>
          <small>{errors.username && <p>{errors.username}</p>}</small>
        </div>
        <div className="card-no space icon-relative">
          <label>Credit Card Number</label>
          <input
            name="card"
            type="text"
            placeholder="Credit Card Number"
            value={values.card}
            onChange={handleChange}
          />
          <i class="far fa-credit-card"></i>
          <small>{errors.card && <p>{errors.card}</p>}</small>
        </div>
        <div class="form-grp space">
          <div class="outer-date">
          <label>Expiary Date</label>
          <div className="date icon-relative">
            <input
              name="month"
              maxLength="2"
              placeholder="MM"
              type="text"
              value={values.month}
              onChange={handleChange}
            />
            <input
              value={values.year}
              name="year"
              maxLength="2"
              placeholder="YY"
              type="text"
              onChange={handleChange}
            />
          </div>
          {/* <i class="far fa-calendar-alt"></i> */}

            <small>{errors.date && <p>{errors.date}</p>}</small>
           
          </div>
          <div className="cvv icon-relative">
            <label>CVV</label>
            <input
              name="cvv"
              type="text"
              placeholder="CVV"
              maxLength="4"
              value={values.cvv}
              onChange={handleChange}
            />
            <i class="fas fa-lock"></i>
            <small>{errors.cvv && <p>{errors.cvv}</p>}</small>
          </div>
        </div>
        <div class="btn-submit" onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
}

export default Form;
