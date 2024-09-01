"use client";
import { useField } from "formik";
import React from "react";

/**
 * This is the Higher Order Component for the Input Field
 * @param {WrappedComponent} WrappedComponent
 * @param  {type} type required
 * @param  {label} label required
 * @param  {placeholder} placeholder required
 * @returns {function} WithInputValidation
 */
const WithInputValidation = (WrappedComponent: React.ComponentType) => {
  return function WithInputValidation(props: any) {
    const [showPassword, setShowPassword] = React.useState(0);
    const [field, meta] = useField(props.name);
    const handlePasswordToggle = () => {
      setShowPassword(showPassword == 0 ? 1 : 0);
    };
    return (
      <WrappedComponent
        {...field}
        {...props}
        showpassword={showPassword}
        togglepswd={handlePasswordToggle}
      />
    );
  };
};

export default WithInputValidation;
