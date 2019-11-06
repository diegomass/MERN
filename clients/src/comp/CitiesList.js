import React from 'react';

        const CitiesList = ({cities}) =>
        cities.map(cities => <li key={cities}>{cities}</li>)

export default CitiesList;