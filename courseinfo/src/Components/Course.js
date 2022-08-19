import { Header } from './Header';
import { Content } from './Content';
import { Total } from './Total';

export const Course = ({course}) => {

    return(
        <div>
            <Header {...course} />
            <Content {...course} />
            <Total {...course} />
        </div>
    );
}