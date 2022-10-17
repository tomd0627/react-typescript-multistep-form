import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zipCode,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address Details">
      <div className="my-3">
        <input
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
          autoFocus
          required
          type="text"
          className="form-control"
          placeholder="Street"
          aria-label="Street"
        />
      </div>
      <div className="my-3">
        <input
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
          required
          type="text"
          className="form-control"
          placeholder="City"
          aria-label="City"
        />
      </div>
      <div className="my-3">
        <input
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
          required
          type="text"
          className="form-control"
          placeholder="State"
          aria-label="State"
        />
      </div>
      <div className="my-3">
        <input
          value={zipCode}
          onChange={(e) => updateFields({ zipCode: e.target.value })}
          required
          type="text"
          className="form-control"
          placeholder="Zip Code"
          aria-label="Zip Code"
        />
      </div>
    </FormWrapper>
  );
}
