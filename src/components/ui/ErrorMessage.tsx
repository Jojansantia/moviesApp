import { IPropsError } from "../../interfaces";

const ErrorMessage = ({ text }: IPropsError) => {
  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  );
};

export default ErrorMessage;
