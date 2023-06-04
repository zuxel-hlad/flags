export interface ICountry {
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            ara: {
                official: string;
                common: string;
            };
        };
    };
    capital: string[];
    region: string;
    population: number;
}

export interface ITranformedCountry extends Omit<ICountry, 'name'> {
    name: string;
    img: string;
    alt: string;
    info: ICountryInfo[];
}

interface ICountryInfo {
    title: string;
    description: string | string[];
}
