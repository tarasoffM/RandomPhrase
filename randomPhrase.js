// phrase arrays for the generator to pull from
const beginnings = [
    "The curious cat",
    "A wandering traveler",
    "The mysterious figure",
    "An ancient tree",
    "The wise old owl",
    "A shimmering star",
    "The forgotten book",
    "A fearless explorer",
    "The enchanted forest",
    "A hidden treasure"
];
const middles = [
    "silently whispers",
    "embarks on a journey",
    "holds a secret",
    "casts a shadow",
    "shines brightly",
    "reveals a path",
    "guards the entrance",
    "waits patiently",
    "discovers a clue",
    "awakens with a start"
];
const ends = [
    "beneath the moonlit sky.",
    "at the edge of the world.",
    "in the heart of the storm.",
    "under the ancient ruins.",
    "within the forgotten temple.",
    "beyond the distant mountains.",
    "near the crystal-clear lake.",
    "along the winding river.",
    "in the depths of the ocean.",
    "at the break of dawn."
];

const randomPhrase = () => {
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const end = ends[Math.floor(Math.random() * ends.length)];
    return `${beginning} ${middle} ${end}`;
}

console.log(randomPhrase());