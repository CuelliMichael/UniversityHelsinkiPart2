import { SingleCountry } from "./SingleCountry";
import { MultipleCountries } from "./MultipleCountries";

export const ShowCountries = ({ countries, search }) => {

    const findCountries = (search) => {
        let counter = 0;
        let filter_array = [];
        for (let item in countries) {
            if (countries[item].official.includes(search)) {
                if (counter > 10) { return "Too many matches, specify another filter" }
                counter++;
                filter_array = [...filter_array, countries[item]];
            }
        }
        if (counter === 1) {
            return (
                <SingleCountry country={filter_array[0]} />
            )
        } else if (counter <= 10) {
            return (
                <div>
                    {
                        filter_array.map(
                            item => <MultipleCountries
                                key={item.official}
                                country={item}
                            />
                        )
                    }
                </div>
            )
        } else {
            return <div></div>;
        }
    }

    return (
        findCountries(search)
    )
}