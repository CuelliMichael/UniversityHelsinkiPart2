

export const SingleCountry = ({ country }) => {

    const mapLanguages = (languages) => {
        let language_array = [];
        for (let value in languages) {
            language_array = [...language_array, languages[value]];
        }
        return language_array;
    }
    
    return (
        <div>
            <h2>{country.official}</h2>
            <div>{`Capital: ${country.capital}`}</div>
            <div>{`Area: ${country.area}`}</div>
            <div>
                <h3>Languages</h3>
                <ul>
                    {mapLanguages(country.languages).map(
                        item => <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
            <div style={{ fontSize: '190px' }}>{country.flag}</div>
        </div>
    )
}