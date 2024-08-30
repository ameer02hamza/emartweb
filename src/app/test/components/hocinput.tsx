// import React from "react";

// /**
//  * This is the Higher Order Component for the Input Field
//  * @param {WrappedComponent} WrappedComponent
//  * @param  {type} type required
//  * @param  {label} label required
//  * @param  {placeholder} placeholder required
//  * @returns {function} WithInputValidation
//  */
// const WithInputValidation = (WrappedComponent: any) => {
//   return function WithInputValidation(props: any) {
//     const [showPassword, setShowPassword] = React.useState(false);
//     const handleChange = (event: any) => {
//       const { value } = event.target;
//       props.onChange(value);
//     };
//     const handlePasswordToggle = () => {
//       setShowPassword(!showPassword);
//     };
//     return (
//       <WrappedComponent
//         {...props}
//         onChange={handleChange}
//         showPassword={showPassword}
//         togglePswd={handlePasswordToggle}
//       />
//     );
//   };
// };

// export default WithInputValidation;
