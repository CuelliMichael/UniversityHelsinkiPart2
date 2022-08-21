

export const FilterByName = ({ filter_by_name, onFilterChange }) => {

    const handleChange = (e) => {
        onFilterChange(e.target.value);
    }

    return (
        <div>
            filter shown with: <input name='filter_by_name' value={filter_by_name} onChange={handleChange} />
        </div>
    )
}