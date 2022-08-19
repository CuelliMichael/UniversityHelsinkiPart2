

export const Total = ({parts}) => {

    return(
        <>
            <h3>total of {parts && parts.reduce((total,item) => total + item.exercises,0)} exercises</h3>
        </>
    );
}