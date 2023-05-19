import React from 'react';

interface FormProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formHeading: string;
  children: React.ReactNode;
};

const Form: React.FC<FormProps> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <h2>{props.formHeading}</h2>
      {props.children}
    </form>
  );
};

export default Form;
