import { useState } from 'react';
import { SingleCountry } from './SingleCountry';

export const MultipleCountries = ({ country }) => {

    const [visible, setVisible] = useState(false);

    const handleVisibility = (visible) => {
        setVisible(visible);
    }

    return (
        <div >
            {!visible ?
                <div>
                    {country.official}
                    <button onClick={() => handleVisibility(true)}>show</button>
                </div>
                :
                <div>
                    <button onClick={() => handleVisibility(false)}>hide</button>
                    <SingleCountry country={country} />
                </div>
            }
        </div>
    )
}