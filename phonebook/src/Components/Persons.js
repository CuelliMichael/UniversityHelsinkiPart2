

export const Persons = ({ persons, filter_by_name }) => {

    const filtered_value = persons.filter(
        item => item.name.includes(filter_by_name)
    );

    return (
        <div>
            {
                filtered_value &&
                filtered_value.map(
                    item => <div key={item.id}>{item.name} {item.number}</div>
                )
            }
        </div>
    )
}