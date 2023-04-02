import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

export default function CheckoutForm() {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [access, setAccess] = useState(false);

    // aca tengo que tener un estado que valie la isguiente pantalla

    const handleInputs = (e) => {};

    const handleSubmit = (values) => {
        console.log(values);

        if (
            values.firstName &&
            values.lastName &&
            values.email &&
            values.address &&
            values.city
        ) {
            router.push({
                pathname: "/success",
                query: values,
            });
        } else {
            setError(true);
        }
        // router.push({
        //     pathname: "/success",
        //     query: values,
        // });
    };

    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
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
                                className="borderbg-white mt-2 w-full rounded-md px-4 py-2 text-gray-500"
                                id="firstName"
                                name="firstName"
                                placeholder="Jhon"
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
                                className="borderbg-white mt-2 w-full rounded-md px-4 py-2 text-gray-500"
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
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
                        className="borderbg-white w-full rounded-md px-4 py-2 text-gray-500"
                        id="email"
                        name="email"
                        placeholder="me@gmail.com"
                        type="email"
                    />
                    <label
                        className="mt-4 mb-2 font-bold text-gray-700"
                        htmlFor="address"
                    >
                        Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                        className="borderbg-white w-full rounded-md px-4 py-2 text-gray-500"
                        id="address"
                        name="address"
                        placeholder="Av. Siempreviva 742"
                    />
                    <label
                        className="mt-4 mb-2 font-bold text-gray-700"
                        htmlFor="city"
                    >
                        City <span className="text-red-500">*</span>
                    </label>
                    <Field
                        className="borderbg-white w-full rounded-md px-4 py-2 text-gray-500"
                        id="city"
                        name="city"
                        placeholder="Springfield"
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
                <p className="text-red-500">Complete los campos vacios</p>
            )}
        </>
    );
}
