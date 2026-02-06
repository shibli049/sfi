export interface Person {
    id: string;
    sv: string;
    en: string;
    type: 'male' | 'female' | 'me';
    gen: number;
    partners?: string[];
    parents?: string[];
    group?: string;
}

export const familyData: Person[] = [
    // Generation 1
    { id: 'farfar', sv: 'Farfar', en: "Grandfather (Dad's dad)", type: 'male', gen: 1, partners: ['farmor'], group: 'farforaldrar' },
    { id: 'farmor', sv: 'Farmor', en: "Grandmother (Dad's mom)", type: 'female', gen: 1, partners: ['farfar'], group: 'farforaldrar' },
    { id: 'morfar', sv: 'Morfar', en: "Grandfather (Mom's dad)", type: 'male', gen: 1, partners: ['mormor'], group: 'morforaldrar' },
    { id: 'mormor', sv: 'Mormor', en: "Grandmother (Mom's mom)", type: 'female', gen: 1, partners: ['morfar'], group: 'morforaldrar' },

    // Generation 2
    { id: 'farbror', sv: 'Farbror', en: "Uncle (Dad's brother)", type: 'male', gen: 2, parents: ['farfar', 'farmor'] },
    { id: 'faster', sv: 'Faster', en: "Aunt (Dad's sister)", type: 'female', gen: 2, parents: ['farfar', 'farmor'] },
    { id: 'pappa', sv: 'Pappa', en: "Dad", type: 'male', gen: 2, parents: ['farfar', 'farmor'], partners: ['mamma'], group: 'foraldrar' },
    { id: 'mamma', sv: 'Mamma', en: "Mom", type: 'female', gen: 2, parents: ['morfar', 'mormor'], partners: ['pappa'], group: 'foraldrar' },
    { id: 'morbror', sv: 'Morbror', en: "Uncle (Mom's brother)", type: 'male', gen: 2, parents: ['morfar', 'mormor'] },
    { id: 'moster', sv: 'Moster', en: "Aunt (Mom's sister)", type: 'female', gen: 2, parents: ['morfar', 'mormor'] },

    // Generation 3
    { id: 'kusin_p', sv: 'Kusin', en: "Cousin (Paternal)", type: 'male', gen: 3, parents: ['farbror'] },
    { id: 'bror', sv: 'Bror', en: "Brother", type: 'male', gen: 3, parents: ['pappa', 'mamma'], group: 'syskon' },
    { id: 'jag', sv: 'Jag', en: "Me", type: 'me', gen: 3, parents: ['pappa', 'mamma'], group: 'syskon' },
    { id: 'syster', sv: 'Syster', en: "Sister", type: 'female', gen: 3, parents: ['pappa', 'mamma'], group: 'syskon' },
    { id: 'kusin_m', sv: 'Kusin', en: "Cousin (Maternal)", type: 'female', gen: 3, parents: ['moster'] },

    // Generation 4 (Barnbarn)
    { id: 'son', sv: 'Son', en: "Son (Barnbarn)", type: 'male', gen: 4, parents: ['jag'], group: 'barnbarn' },
    { id: 'dotter', sv: 'Dotter', en: "Daughter (Barnbarn)", type: 'female', gen: 4, parents: ['jag'], group: 'barnbarn' },
];

export const groups: Record<string, { sv: string, en: string }> = {
    'farforaldrar': { sv: 'Farföräldrar', en: 'Paternal Grandparents' },
    'morforaldrar': { sv: 'Morföräldrar', en: 'Maternal Grandparents' },
    'foraldrar': { sv: 'Föräldrar', en: 'Parents' },
    'syskon': { sv: 'Syskon', en: 'Siblings' },
    'barnbarn': { sv: 'Barnbarn', en: 'Grandchildren' }
};
