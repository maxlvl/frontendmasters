const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


let emptyRooms = {
    kitchen: true,
    ballroom: true,
    conservatory: true,
    'dining room': true,
    'billiard room': true,
    library: true
}

let defineEmptyRoom = (suspectList, candidateRooms) => {
    suspectList.forEach(suspect => {
        suspect.rooms.forEach(room => {
            if (Object.values(room)[0] === true) {
                delete candidateRooms[Object.keys(room)]
            }
        })
    })
    return candidateRooms
}


let emptyRoom = defineEmptyRoom(newDevelopment, emptyRooms)
console.log(emptyRoom)

// Challenge - try to do this with reduce instead.