// ---- SŁOWNIK ---------------------
const OCENIAJACY = 'osoba';
const OCENY = 'oceny';
const HPS = 'hps';
const HOS = 'hos';
const COM = 'communication';
const UND = 'understending';
const SSF = 'self_sufficiency';
const FAM = 'focus_and_motivation';
const MAPA = 'mapa';
const GRUPKI = 'grupki';
const BAZA = 'baza';
const DYSTANSE = 'dystanse';
const SUGESTIE = 'sugestie';

// ---- OSOBY ------------------------------------------
const DAMIAN = 'Damian M';
const FOX = 'Fox Mulder';
const DANA = 'Dana Scully';
const NEO = 'Thomas A. Anderson';

// DANE ------------------------------------------
let mainReviewData = [
    {
        [OCENIAJACY]: DAMIAN,
        [OCENY]: {
            [HPS]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            },
            [HOS]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            },
            [COM]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            },
            [UND]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            },
            [SSF]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            },
            [FAM]: {
                [MAPA]: {
                    [DYSTANSE]: [2],
                    [BAZA]: 1
                },
                [GRUPKI]: [
                    [FOX, DANA],
                    [NEO]
                ],
                [SUGESTIE]: {
                    [FOX]: [
                        "Be better at searching."
                    ],
                    [DANA]: [
                        "Want to believe..."
                    ],
                    [NEO]: [
                        "Should wake up!"
                    ]
                }
            }
        }
    }
];