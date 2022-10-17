import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Details">
      <div className="my-3">
        <input
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          autoFocus
          required
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="Email"
        />
      </div>
      <div className="my-3">
        <input
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          required
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
    </FormWrapper>
  );
}
