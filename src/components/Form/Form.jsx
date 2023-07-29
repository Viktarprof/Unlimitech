import React  from "react";
import s from "./Form.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    const dataUser = {
      id: Date.now(),
      mail: data.email,
      phone: data.phone,
    };
    console.log(dataUser);
    reset();
  };

  const mailElem = register("email", {
    required: "Adres e-mail musi być uzupełniony",
    pattern: {
      value:
        /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: "Podałeś(aś) niepoprawny adres e-mail.",
    },
  });

  const phoneElem = register("phone", {
    required: "Numer telefonu musi być wypełniony",
    pattern: {
      value: /^\+\(\d{1,}\)\d{9}$/,
      message: "Numer telefonu powinien być w formacie + (kod) xxx xxx xxx.",
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit(submitForm)}>
      <Input
        {...mailElem}
        type="email"
        name="email"
        placeholder="Twój e-mail"
        styles="input"
        register={register}
        error={errors.email}
      />

      <Input
        {...phoneElem}
        type="phone"
        name="phone"
        placeholder="Twój numer telefonu"
        styles="input"
        register={register}
        error={errors.phone}
      />
      <Button text="Dołącz teraz" styles="dołączBtn" />
    </form>
  );
}

export default Form;
