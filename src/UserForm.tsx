import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <div className="my-3">
                <input value={firstName} onChange={e => updateFields({ firstName: e.target.value })} autoFocus required type="text" className="form-control" placeholder="First Name" aria-label="First Name" />
            </div>
            <div className="my-3">
                <input value={lastName} onChange={e => updateFields({ lastName: e.target.value })} required type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" />
            </div>
            <div className="my-3">
                <input value={age} onChange={e => updateFields({ age: e.target.value })} required type="text" className="form-control" placeholder="Age" aria-label="Age" />
            </div>
        </FormWrapper>
    )
}