import { Course } from './Course';

export const Courses = ({courses}) => {

    return(
        <>
            <h1>Web development curriculum</h1>
            {
                courses &&
                courses.map(
                    course => <Course course={course} />
                )
            }
        </>
    )
}