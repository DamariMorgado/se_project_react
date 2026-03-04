import { useState } from "react";

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange, setValues };
}

export default useForm;
