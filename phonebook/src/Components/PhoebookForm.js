

export const PhonebookForm = ({new_phone, onSubmit, onChange}) => {

    const handleChange = (e) => {
        const new_phone_values = {
            ...new_phone,
            [e.target.name]:e.target.value
        }
        onChange(new_phone_values);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input name='name' value={new_phone.name} onChange={handleChange} />
            </div>
            <div>
                number: <input name='number' value={new_phone.number} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

}