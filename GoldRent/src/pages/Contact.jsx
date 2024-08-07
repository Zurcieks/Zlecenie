import React from "react";
import { Controller, useForm } from "react-hook-form";
import IconInfo from "../components/IconInfo";
import IconEmail from "../icons/iconEmail";
import IconPhone from "../icons/iconPhone";
import FormElements from "../components/FormElements";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Email wysłany pomyślnie');
      } else {
        console.error("Błąd backendu:", result);
        alert('Błąd podczas wysyłania emaila');
      }
    } catch (error) {
      console.error('Błąd:', error);
      alert('Błąd podczas wysyłania emaila');
    }
  };

  return (
    <div
      className="relative bg-cover bg-center z-0 min-h-screen pb-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(/bg2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Kontakt</title>
      </Helmet>
      <div className="relative z-10 xl:container mx-auto pt-10">
        <div className="flex justify-center mb-12">
          <h1 className="text-4xl sm:text-4xl font-bold font-sans text-white">
            Skontaktuj się z nami
          </h1>
        </div>
        <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto  mb-24">
          <div className="rounded-lg shadow-lg bg-white py-10 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
              <IconInfo icon={<IconEmail />} text="contact@us" />
              <IconInfo icon={<IconPhone />} text="574232324" />
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormElements
                      type="text"
                      label="Imię"
                      placeholder="Podaj swoję imie..."
                      fieldRef={field}
                      hasError={errors.name?.type === "required"}
                    />
                  )}
                />
                <Controller
                  name="surname"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormElements
                      type="text"
                      label="Nazwisko"
                      placeholder="Podaj swoję nazwisko"
                      fieldRef={field}
                      hasError={errors.surname?.type === "required"}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  }}
                  render={({ field }) => (
                    <FormElements
                      type="email"
                      label="Email"
                      placeholder="Podaj swój email"
                      fieldRef={field}
                      hasError={
                        errors.email?.type === "required" ||
                        errors.email?.type === "pattern"
                      }
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormElements
                      type="textarea"
                      label="Wiadomość"
                      placeholder="Z czym do nas przychodzisz..."
                      fieldRef={field}
                      hasError={errors.message?.type === "required"}
                    />
                  )}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-blue-700"
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
