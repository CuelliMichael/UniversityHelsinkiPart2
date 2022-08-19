import { Part } from './Part';

export const Content = ({parts}) => {

    return (
        <div>
            {
            parts? 
                parts.map(
                    (item) => <Part key={item.id} part={item.name} exercises={item.exercises} />
                )
            :
            <></>
            }
        </div>
    )
}