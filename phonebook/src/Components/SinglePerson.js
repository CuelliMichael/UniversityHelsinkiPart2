import { DEFAULT_URL, DeleteData } from "../RestCall";

export const SinglePerson = ({ person, onReload }) => {

    const handleClick = () => {
        if (window.confirm("Do you really want to delete this number?")) {
            DeleteData(`${DEFAULT_URL}persons/${person.id}`,
                () => { onReload(); },
                (message, error) => alert(error)
            );
        }
    }

    return (
        <div >
            {person.name} {person.number}
            <button onClick={handleClick}>delete</button>
        </div>
    );
}