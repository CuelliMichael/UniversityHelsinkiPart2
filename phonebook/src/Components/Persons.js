import { SinglePerson } from "./SinglePerson";

export const Persons = ({ persons, filter_by_name, onReload }) => {

    const filtered_value = persons.filter(
        item => item.name.includes(filter_by_name)
    );

    return (
        <div>
            {
                filtered_value &&
                filtered_value.map(
                    item => <SinglePerson key={item.id} person={item} onReload={onReload} />
                )
            }
        </div>
    )
}