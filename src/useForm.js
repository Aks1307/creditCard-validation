import { useState, useEffect } from "react";
import validate from "./validate";

const useForm = (callback) => {
  const [values, setValue] = useState({
    username: "",
    card: "",
    month: "",
    year:"",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizeCardNumber = (value) => {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name + ": " + value);
    if(name==="card"){
      value = normalizeCardNumber(value);
    }
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
  };
};

export default useForm;
