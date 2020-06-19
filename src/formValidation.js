import * as Yup from "yup";

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long.")
    .required("Name is Required"),
});

export default formValidation;
