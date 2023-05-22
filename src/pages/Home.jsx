import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from '../api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Controls from '../components/controls/Controls';
import List from '../components/list/List';
import Card from '../components/card/Card';

const Home = ({ countries, setCountries }) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState(null);
    const navigate = useNavigate();

    const filteredAndSearchedCountries = (searchVal, regionVal) => {
        let data = [...countries];

        if (searchVal) {
            return data.filter(c =>
                c.name.common.toLowerCase().includes(searchVal.toLowerCase())
            );
        } else if (regionVal) {
            return data.filter(c => c.region.includes(regionVal));
        } else {
            return data;
        }
    };
    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, []);

    const countriesCards = filteredAndSearchedCountries(
        search,
        region?.value || ''
    ).map((c, idx) => {
        const countryInfo = {
            ...c,
            name: c.name.common,
            img: c.flags.png,
            info: [
                {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                },
                {
                    title: 'Region',
                    description: c.region,
                },
                {
                    title: 'Capital',
                    description: c.capital,
                },
            ],
        };
        return (
            <Card
                key={c.name.common}
                {...countryInfo}
                onClick={() => navigate(`country/${c.name.common}`)}
                tabIndex={idx + 1}
            />
        );
    });

    return (
        <section>
            <Controls
                region={region}
                setRegion={setRegion}
                search={search}
                setSearch={setSearch}
            />
            <List>{countriesCards}</List>
        </section>
    );
};

export default Home;
