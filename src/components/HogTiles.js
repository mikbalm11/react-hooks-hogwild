import React, { useState } from "react";
import Hog from "./Hog";
import { Card, Checkbox, Dropdown } from 'semantic-ui-react';

const HogTiles = ({ hogs }) => {
    const [showGreased, setShowGreased] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [hiddenHogs, setHiddenHogs] = useState(new Set());

    const handleFilterChange = () => {
        setShowGreased(!showGreased);
    };

    const handleSortChange = (e, { value }) => {
        setSortOption(value);
    };

    const handleHideHog = (name) => {
        setHiddenHogs(new Set(hiddenHogs).add(name));
    };

    const getSortedHogs = (hogs) => {
        switch (sortOption) {
            case 'name-asc':
                return [...hogs].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-dsc':
                return [...hogs].sort((a, b) => b.name.localeCompare(a.name));
            case 'weight-asc':
                return [...hogs].sort((a, b) => a.weight - b.weight);
            case 'weight-dsc':
                return [...hogs].sort((a, b) => b.weight - a.weight);
            default:
                return hogs;
        }
    };

    const sortOptions = [
        { key: 'name-asc', text: 'Name Ascending', value: 'name-asc' },
        { key: 'name-dsc', text: 'Name Descending', value: 'name-dsc' },
        { key: 'weight-asc', text: 'Weight Ascending', value: 'weight-asc' },
        { key: 'weight-dsc', text: 'Weight Descending', value: 'weight-dsc' }
    ];

    const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;
    const sortedHogs = getSortedHogs(filteredHogs);
    const visibleHogs = sortedHogs.filter(hog => !hiddenHogs.has(hog.name));

    const hogObjects = visibleHogs.map(hog => (
        <Hog
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            medal={hog["highest medal achieved"]}
            onHide={() => handleHideHog(hog.name)}
        />));

    return (
        <div>
            <div>
                <Checkbox
                    label="Show Greased Hogs"
                    checked={showGreased}
                    onChange={handleFilterChange}
                />
                Show Greased Hogs

                <Dropdown className="filterWrapper"
                    placeholder='Sort by'
                    selection
                    options={sortOptions}
                    onChange={handleSortChange}
                    value={sortOption}
                />
            </div>
            <div className="ui grid container">
                {hogObjects}
            </div>
        </div>
    );
};

export default HogTiles;
