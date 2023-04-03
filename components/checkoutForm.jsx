import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { useAppContext } from "@/components/stateWrapper";

export default function CheckoutForm() {
    const router = useRouter();
    const { setAccess } = useAppContext();
    const [error, setError] = useState(false);

    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [addressEmpty, setAddressEmpty] = useState(false);
    const [cityEmpty, setCityEmpty] = useState(false);

    const handleAccess = (e) => {
        setAccess(true);
    };

    const handleSubmit = (values) => {
        setFirstNameEmpty(values.firstName === "");
        setLastNameEmpty(values.lastName === "");
        setEmailEmpty(values.email === "");
        setAddressEmpty(values.address === "");
        setCityEmpty(values.city === "");

        if (
            values.firstName === "" ||
            values.lastName === "" ||
            values.email === "" ||
            values.address === "" ||
            values.city === ""
        ) {
            setError(true);
        } else {
            handleAccess();
            router.push({
                pathname: "/success",
                query: values,
            });
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
                    city: "",
                }}
                onSubmit={handleSubmit}
            >
                <Form className="mx-auto flex w-full flex-col items-start p-6">
                    <div className="flex w-full flex-col gap-4 md:flex-row">
                        <div className="w-full">
                            <label
                                className="mt-4 mb-2 font-bold text-gray-700"
                                htmlFor="firstName"
                            >
                                First Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <Field
                                className={`borderbg-white mt-2 w-full rounded-md px-4 py-2 text-gray-500 ${
                                    firstNameEmpty
                                        ? "border border-red-500"
                                        : ""
                                }`}
                                id="firstName"
                                name="firstName"
                                placeholder="Jhon"
                                onBlur={(e) => {
                                    setFirstNameEmpty(e.target.value === "");
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                className="mt-4 mb-2 font-bold text-gray-700"
                                htmlFor="lastName"
                            >
                                Last Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <Field
                                className={`borderbg-white mt-2 w-full rounded-md px-4 py-2 text-gray-500 ${
                                    lastNameEmpty ? "border border-red-500" : ""
                                }`}
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                                onBlur={(e) => {
                                    setLastNameEmpty(e.target.value === "");
                                }}
                            />
                        </div>
                    </div>

                    <label
                        className="mt-4 mb-2 font-bold text-gray-700"
                        htmlFor="email"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <Field
                        className={`borderbg-white w-full rounded-md px-4 py-2 text-gray-500 ${
                            emailEmpty ? "border border-red-500" : ""
                        }`}
                        id="email"
                        name="email"
                        placeholder="me@gmail.com"
                        type="email"
                        onBlur={(e) => {
                            setEmailEmpty(e.target.value === "");
                        }}
                    />
                    <label
                        className="mt-4 mb-2 font-bold text-gray-700"
                        htmlFor="address"
                    >
                        Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                        className={`borderbg-white w-full rounded-md px-4 py-2 text-gray-500 ${
                            addressEmpty ? "border border-red-500" : ""
                        }`}
                        id="address"
                        name="address"
                        placeholder="Av. Siempreviva 742"
                        onBlur={(e) => {
                            setAddressEmpty(e.target.value === "");
                        }}
                    />
                    <label
                        className="mt-4 mb-2 font-bold text-gray-700"
                        htmlFor="city"
                    >
                        City <span className="text-red-500">*</span>
                    </label>
                    <Field
                        className={`borderbg-white w-full rounded-md px-4 py-2 text-gray-500 ${
                            cityEmpty ? "border border-red-500" : ""
                        }`}
                        id="city"
                        name="city"
                        placeholder="Springfield"
                        onBlur={(e) => {
                            setCityEmpty(e.target.value === "");
                        }}
                    />

                    <button
                        className="mt-8 w-full rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
                        type="submit"
                    >
                        Finalizar compra
                    </button>
                </Form>
            </Formik>
            {error && (
                <p className="mx-8 -mt-2 text-red-500">
                    * Complete los campos vacios
                </p>
            )}
        </>
    );
}
