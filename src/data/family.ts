export interface Person {
    id: string;
    sv: string;
    en: string;
    type: 'male' | 'female' | 'me';
    gen: number;
    partners?: string[];
    parents?: string[];
    group?: string;
    avatar?: string;
}

export const familyData: Person[] = [
    // Generation 1
    { id: 'farfar', sv: 'Farfar', en: "Grandfather (Dad's dad)", type: 'male', gen: 1, partners: ['farmor'], group: 'farforaldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Grandfather&mouth=smile&eyes=happy&hairColor=d1d5db&top=shortRound&accessoriesProbability=0' },
    { id: 'farmor', sv: 'Farmor', en: "Grandmother (Dad's mom)", type: 'female', gen: 1, partners: ['farfar'], group: 'farforaldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Farmor&mouth=smile&eyes=happy&hairColor=d1d5db&top=bun&accessoriesProbability=0&eyebrows=defaultNatural' },
    { id: 'morfar', sv: 'Morfar', en: "Grandfather (Mom's dad)", type: 'male', gen: 1, partners: ['mormor'], group: 'morforaldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Morfar&mouth=smile&eyes=happy&hairColor=d1d5db&top=shortRound&accessoriesProbability=0' },
    { id: 'mormor', sv: 'Mormor', en: "Grandmother (Mom's mom)", type: 'female', gen: 1, partners: ['morfar'], group: 'morforaldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Mormor&mouth=smile&eyes=happy&hairColor=d1d5db&top=bun&accessoriesProbability=0&eyebrows=defaultNatural' },

    // Generation 2
    { id: 'farbror', sv: 'Farbror', en: "Uncle (Dad's brother)", type: 'male', gen: 2, parents: ['farfar', 'farmor'], avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Farbror&mouth=smile&eyes=happy&top=shortFlat&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'faster', sv: 'Faster', en: "Aunt (Dad's sister)", type: 'female', gen: 2, parents: ['farfar', 'farmor'], group: 'farforaldrar_extra', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Faster&mouth=smile&eyes=happy&top=straight01&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },
    { id: 'pappa', sv: 'Pappa', en: "Dad", type: 'male', gen: 2, parents: ['farfar', 'farmor'], partners: ['mamma'], group: 'foraldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Pappa&mouth=smile&eyes=happy&top=shortFlat&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'mamma', sv: 'Mamma', en: 'Mom', type: 'female', gen: 2, partners: ['pappa'], group: 'foraldrar', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Mamma&mouth=smile&eyes=happy&top=straight01&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },
    { id: 'morbror', sv: 'Morbror', en: "Uncle (Mom's brother)", type: 'male', gen: 2, parents: ['morfar', 'mormor'], avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Morbror&mouth=smile&eyes=happy&top=shortFlat&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'moster', sv: 'Moster', en: "Aunt (Mom's sister)", type: 'female', gen: 2, parents: ['morfar', 'mormor'], group: 'morforaldrar_extra', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Moster&mouth=smile&eyes=happy&top=straight01&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },

    // Generation 3
    { id: 'kusin_p', sv: 'Kusin', en: "Cousin (Paternal)", type: 'male', gen: 3, parents: ['farbror'], avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=KusinP&mouth=smile&eyes=happy&top=shortRound&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'bror', sv: 'Bror', en: "Brother", type: 'male', gen: 3, parents: ['pappa', 'mamma'], group: 'syskon', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Bror&mouth=smile&eyes=happy&top=shortRound&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'syster', sv: 'Syster', en: 'Sister', type: 'female', gen: 3, parents: ['pappa', 'mamma'], group: 'syskon', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sister&mouth=smile&eyes=happy&top=curvy&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },
    { id: 'kusin_m', sv: 'Kusin', en: "Cousin (Mom's side)", type: 'female', gen: 3, parents: ['moster'], avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=CousinM&mouth=smile&eyes=happy&top=curvy&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },

    // Generation 4 (Barnbarn)
    { id: 'son', sv: 'Son', en: "Son (Barnbarn)", type: 'male', gen: 4, parents: ['bror', 'syster'], group: 'barnbarn', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Son&mouth=smile&eyes=happy&top=shortRound&hairColor=2c1b18&accessoriesProbability=0' },
    { id: 'dotter', sv: 'Dotter', en: 'Daughter', type: 'female', gen: 4, parents: ['bror', 'syster'], group: 'barnbarn', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Daughter&mouth=smile&eyes=happy&top=straight02&hairColor=4a312c&accessoriesProbability=0&eyebrows=defaultNatural' },
];

export const groups: Record<string, { sv: string, en: string }> = {
    'farforaldrar': { sv: 'Farföräldrar', en: 'Paternal Grandparents' },
    'morforaldrar': { sv: 'Morföräldrar', en: 'Maternal Grandparents' },
    'foraldrar': { sv: 'Föräldrar', en: 'Parents' },
    'syskon': { sv: 'Syskon', en: 'Siblings' },
    'barnbarn': { sv: 'Barnbarn', en: 'Grandchildren' }
};
