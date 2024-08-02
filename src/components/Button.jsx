// Button Component | Must be seperated later
const Button = ({ children, className }) => (
  <button className={`text-xs py-2 px-5 rounded-full ${className} lg:text-lg`}>
    {children}
  </button>
);

export default Button;
