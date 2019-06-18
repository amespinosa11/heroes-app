export class Heroe {
    id: number;
    name: string;
    slug: string;
    powerstats: PowerStats;
    appearance: Appearance;
    biography: Biography;
    work: Work;
    connections: Connections;
    images: Images;
}

class PowerStats {
    intelligence: number ;
    strength: number ;
    speed: number ;
    durability: number ;
    power: number ;
    combat: number ;
}

class Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

class Biography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}

class Work {
    occupation: string;
    base: string;
}

class Connections {
    groupAffiliation: string;
    relatives: string;
}

class Images {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}