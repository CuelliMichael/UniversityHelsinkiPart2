

export const FilterCountries = ({search, onChange}) => {

    const hadleChange = (e) => {
        onChange(e.target.value);
    }

    return(
        <div>
            find countries <input value={search} onChange={hadleChange}/>
        </div>
    )
}