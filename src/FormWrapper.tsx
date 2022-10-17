import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
