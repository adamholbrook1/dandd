var races = {
    dwarf: {
        speed: 25,
        age: {
            min: 50,
            max: 350
        },
        size: {
            height: {
                min: 4,
                max: 5.5
            },
            weight: {
                min: 120,
                max: 180
            }
        },
        languages: ['common', 'dwarvish'],
        subraces: ['hill', 'mountain'],
        proficiencies: [
            'Darkvision',
            'Stonecutting'
        ]
    },
    elf: {},
    halfling: {}
}


function getRace(race) {
    return races[race];
}