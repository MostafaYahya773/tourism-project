'use client';
import { contextProvider } from '@/app/context/contextProvider';
import UseEdit from '@/app/hook/(auth)/useEdit';
import { Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
export default function ChangeInfo() {
  // show and hide topic
  const { showChangeTopic, setshowChangeTopic, isloading, setIsLoading } =
    useContext(contextProvider);

  // send data to api
  let { mutate, isError, error } = UseEdit();
  // handle Edit
  const handleRegister = (values) => {
    setIsLoading(true),
      mutate(values, {
        onSuccess: (res) => {
          setIsLoading(false);
          toast.success(res?.data?.message, {
            position: 'top-center',
            className: 'mt-16 text-[14px]',
          });
          setshowChangeTopic({ boolean: true });
        },
        onError: (err) => {
          setIsLoading(false);
          toast.error(err?.response?.data?.error, {
            position: 'top-center',
            className: 'mt-16 text-[14px]',
          });
        },
      });
  };
  //handle error in form
  const validationSchemas = {
    name: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s\u0600-\u06FF]+$/, 'Name must contain only letters')
        .min(3, 'Min length is 3 characters')
        .max(20, 'Max length is 20 characters')
        .required('Name is required'),
    }),
    email: Yup.object({
      email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
    }),
    phone: Yup.object({
      phone: Yup.string()
        .matches(
          /^(\+20)?01[0125][0-9]{8}$/,
          'Phone must be a valid Egyptian number'
        )
        .required('Phone is required'),
    }),
    dateOfBirth: Yup.object({
      dateOfBirth: Yup.date()
        .max(new Date(), 'Birth date cannot be in the future')
        .min(
          new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
          'Age must be less than 100 years'
        )
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
          'You must be at least 10 years old'
        )
        .required('Birth date is required'),
    }),
    address: Yup.object({
      address: Yup.string()
        .matches(
          /^[\u0600-\u06FF\w\s\-/,]+$/,
          'Address must not contain special characters'
        )
        .min(5, 'Address must be at least 5 characters')
        .max(100, 'Address is too long')
        .required('Address is required'),
    }),
  };

  // what filed
  const currentField = showChangeTopic.name;
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      dateOfBirth: '',
    },
    validationSchema: validationSchemas[currentField],
    onSubmit: handleRegister,
  });

  return (
    <div
      className={`${
        showChangeTopic.boolean ? 'hidden' : ''
      } flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000068] z-[9999999999999999]`}
    >
      <div className="p-3 mx-2 bg-white  w-[400px] h-fit rounded-xl ">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-[20px] font-medium text-[#00234D]">
            {`change ${showChangeTopic.name}`}
          </h1>
          <i
            onClick={() => setshowChangeTopic({ boolean: true })}
            className="fa-solid fa-x text-[14px] cursor-pointer"
          ></i>
        </div>
        <div className="form ">
          {isError ? (
            <div className="text-white flex items-center p-2 rounded-lg  bg-[#d15858]">
              {error?.response?.data?.error || error?.message}
            </div>
          ) : null}
          <form onSubmit={formik.handleSubmit}>
            <div className="input w-full flex flex-col gap-y-2">
              <label htmlFor={showChangeTopic.name}>
                {showChangeTopic.name}
              </label>
              {formik.touched[currentField] && formik.errors[currentField] && (
                <div className="text-red-500 text-sm">
                  {formik.errors[currentField]}
                </div>
              )}
              <input
                id={showChangeTopic.name}
                type={showChangeTopic.type}
                name={showChangeTopic.name}
                value={formik.values[showChangeTopic.name] ?? ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-[#00234D] w-full rounded-md px-2 py-2 outline-none text-[13px] text-black"
                placeholder={`Enter your new ${showChangeTopic.name}`}
              />
            </div>
            <button
              type="submit"
              className="w-full h-[40px] bg-[#00234D] text-white rounded-md mt-4"
            >
              {isloading ? <span className="loaderChange"></span> : 'Change'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
