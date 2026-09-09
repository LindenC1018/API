import express from "express";
import axios from "axios";

const app = express();
const port = 4003;

let quotes = [
	{
		id: 1,
		quote: "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants."
	},
	{
		id: 2,
		quote: "Time waits for no man. Unless that man is Chuck Norris."
	},
	{
		id: 3,
		quote: "If you spell Chuck Norris in Scrabble, you win. Forever."
	},
	{
		id: 4,
		quote: "Chuck Norris breathes air…five times a day."
	},
	{
		id: 5,
		quote: "The flu gets a Chuck Norris shot every year."
	},
	{
		id: 6,
		quote: "In the Beginning there was nothing…then Chuck Norris roundhouse kicked nothing and told it to get a job."
	},
	{
		id: 7,
		quote: "When God said, “Let there be light!” Chuck Norris said, 'Say please.'"
	},
	{
		id: 8,
		quote: "Chuck Norris has a mug of nails instead of coffee in the morning."
	},
	{
		id: 9,
		quote: "If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fought, they would both win."
	},
	{
		id: 10,
		quote: "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them."
	},
	{
		id: 11,
		quote: "Chuck Norris’ tears cure cancer. Too bad he has never cried."
	},
	{
		id: 12,
		quote: "Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light"
	},
	{
		id: 13,
		quote: "If you ask Chuck Norris what time it is, he always says, ‘Two seconds till.’ After you ask, ‘Two seconds to what?’ he roundhouse kicks you in the face."
	},
	{
		id: 14,
		quote: "Chuck Norris appeared in the ‘Street Fighter II’ video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this “glitch,” Chuck Norris replied, “That’s no glitch.”"
	},
	{
		id: 15,
		quote: "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent."
	},
	{
		id: 16,
		quote: "Chuck Norris does not own a stove, oven or microwave, because revenge is a dish best served cold."
	},
	{
		id: 17,
		quote: "Chuck Norris does not sleep. He waits."
	},
	{
		id: 18,
		quote: "There is no chin behind Chuck Norris’ beard. There is only another fist."
	},
	{
		id: 19,
		quote: "The chief export of Chuck Norris is pain."
	},
	{
		id: 20,
		quote: "Chuck Norris recently had the idea to sell his pee as a canned beverage. It’s now called Red Bull."
	},
	{
		id: 21,
		quote: "If paper beats rock, rock beats scissors, and scissors beats paper, what beats all 3 at the same time? Chuck Norris."
	},
	{
		id: 22,
		quote: "On the 7th day, God rested…Chuck Norris took over."
	},
	{
		id: 23,
		quote: "Chuck Norris can dribble a bowling ball."
	},
	{
		id: 24,
		quote: "Chuck Norris drinks napalm to fight his heartburn."
	},
	{
		id: 25,
		quote: "Chuck Norris’ roundhouse kick is so powerful, it can be seen from outer space by the naked eye."
	},
	{
		id: 26,
		quote: "If you want a list of Chuck Norris’ enemies, just check the extinct species list."
	},
	{
		id: 27,
		quote: "Chuck Norris has never blinked in his entire life. Never."
	},
	{
		id: 28,
		quote: "Chuck Norris once shot an enemy plane down with his finger, by yelling, “Bang!”"
	},
	{
		id: 29,
		quote: "Chuck Norris does not use spell check. If he happens to misspell a word, Oxford will change the spelling."
	},
	{
		id: 30,
		quote: "Some kids pee their name in the snow. Chuck Norris can pee his name into concrete."
	},
	{
		id: 31,
		quote: "Chuck Norris’ calendar goes straight from March 31st to April 2nd, because no one fools Chuck Norris."
	},
	{
		id: 32,
		quote: "Chuck Norris counted to infinity… twice."
	},
	{
		id: 33,
		quote: "Chuck Norris can speak Braille."
	},
	{
		id: 34,
		quote: "Chuck Norris can have both feet on the ground and kick butt at the same time."
	},
	{
		id: 35,
		quote: "Chuck Norris can do a wheelie on a unicycle."
	},
	{
		id: 36,
		quote: "Chuck Norris stands faster than anyone can run."
	},
	{
		id: 37,
		quote: "Once a cobra bit Chuck Norris’ leg. After five days of excruciating pain, the cobra died."
	},
	{
		id: 38,
		quote: "Chuck Norris once won a game of Connect Four in three moves."
	},
	{
		id: 39,
		quote: "Champions are the breakfast of Chuck Norris."
	},
	{
		id: 40,
		quote: "When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris."
	},
	{
		id: 41,
		quote: "Chuck Norris can slam revolving doors."
	},
	{
		id: 42,
		quote: "Chuck Norris does not hunt because the word hunting implies the possibility of failure. Chuck Norris goes killing."
	},
	{
		id: 43,
		quote: "The dark is afraid of Chuck Norris."
	},
	{
		id: 44,
		quote: "Chuck Norris can kill two stones with one bird."
	},
	{
		id: 45,
		quote: "Chuck Norris can play the violin with a piano."
	},
	{
		id: 46,
		quote: "Chuck Norris makes onions cry."
	},
	{
		id: 47,
		quote: "Death once had a near-Chuck-Norris experience."
	},
	{
		id: 48,
		quote: "When Chuck Norris writes, he makes paper bleed."
	},
	{
		id: 49,
		quote: "Chuck Norris can strangle you with a cordless phone."
	},
	{
		id: 50,
		quote: "Chuck Norris never retreats; He just attacks in the opposite direction."
	},
	{
		id: 51,
		quote: "Chuck Norris can build a snowman out of rain."
	},
	{
		id: 52,
		quote: "Chuck Norris once punched a man in the soul."
	},
	{
		id: 53,
		quote: "Chuck Norris can drown a fish."
	},
	{
		id: 54,
		quote: "Chuck Norris once had a heart attack. His heart lost."
	},
	{
		id: 55,
		quote: "When Chuck Norris looks in a mirror, the mirror shatters. Because not even glass is dumb enough to get in between Chuck Norris and Chuck Norris."
	},
	{
		id: 56,
		quote: "When Chuck Norris enters a room, he doesn’t turn the lights on, he turns the dark off."
	},
	{
		id: 57,
		quote: "The only time Chuck Norris was ever wrong was when he thought he had made a mistake."
	},
	{
		id: 58,
		quote: "Chuck Norris can tie his shoes with his feet."
	},
	{
		id: 59,
		quote: "The quickest way to a man’s heart is with Chuck Norris’s fist."
	},
	{
		id: 60,
		quote: "Chuck Norris is the only person that can punch a cyclops between the eye."
	},
	{
		id: 61,
		quote: "Chuck Norris used to beat up his shadow because it was following to close. It now stands 15 feet behind him."
	},
	{
		id: 62,
		quote: "There has never been a hurricane named Chuck because it would have destroyed everything."
	},
	{
		id: 63,
		quote: "Outer space exists because it’s afraid to be on the same planet with Chuck Norris."
	},
	{
		id: 64,
		quote: "When Chuck Norris does a pushup, he’s pushing the Earth down."
	},
	{
		id: 65,
		quote: "Chuck Norris is the reason why Waldo is hiding."
	},
	{
		id: 66,
		quote: "Chuck Norris doesn’t wear a watch. He decides what time it is."
	},
	{
		id: 67,
		quote: "Chuck Norris does not get frostbite. Chuck Norris bites frost."
	},
	{
		id: 68,
		quote: "In Pamplona, Spain, the people may be running from the bulls, but the bulls are running from Chuck Norris."
	},
	{
		id: 69,
		quote: "Chuck Norris spices up his steaks with pepper spray."
	},
	{
		id: 70,
		quote: "The Great Wall of China was originally created to keep Chuck Norris out. It didn’t work."
	},
	{
		id: 71,
		quote: "Chuck Norris can get in a bucket and lift it up with himself in it."
	},
	{
		id: 72,
		quote: "Most people have 23 pairs of chromosomes. Chuck Norris has 72… and they’re all lethal."
	},
	{
		id: 73,
		quote: "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis."
	},
	{
		id: 74,
		quote: "Chuck Norris doesn’t shower, he only takes blood baths."
	},
	{
		id: 75,
		quote: "Chuck Norris can divide by zero."
	},
	{
		id: 76,
		quote: "The show Survivor had the original premise of putting people on an island with Chuck Norris. There were no survivors."
	},
	{
		id: 77,
		quote: "Chuck Norris destroyed the periodic table, because Chuck Norris only recognizes the element of surprise."
	},
	{
		id: 78,
		quote: "Chuck Norris once kicked a horse in the chin. Its descendants are now known as giraffes."
	},
	{
		id: 79,
		quote: "When Chuck Norris was born, the only person who cried was the doctor. Never slap Chuck Norris."
	},
	{
		id: 80,
		quote: "When Chuck Norris does division, there are no remainders."
	},
	{
		id: 81,
		quote: "It takes Chuck Norris 20 minutes to watch 60 Minutes."
	},
	{
		id: 82,
		quote: "Chuck Norris proved that we are alone in the universe. We weren’t before his first space expedition."
	},
	{
		id: 83,
		quote: "Chuck Norris once went skydiving, but promised never to do it again. One Grand Canyon is enough."
	},
	{
		id: 84,
		quote: "Chuck Norris once ordered a steak in a restaurant. The steak did what it was told."
	},
	{
		id: 85,
		quote: "We live in an expanding universe. All of it is trying to get away from Chuck Norris."
	},
	{
		id: 86,
		quote: "Chuck Norris had to stop washing his clothes in the ocean. Too many tsunamis."
	},
	{
		id: 87,
		quote: "Chuck Norris can sneeze with his eyes open."
	},
	{
		id: 88,
		quote: "Chuck Norris can cook minute rice in 30 seconds."
	},
	{
		id: 89,
		quote: "Chuck Norris beat the sun in a staring contest."
	},
	{
		id: 90,
		quote: "Superman owns a pair of Chuck Norris undies."
	},
	{
		id: 91,
		quote: "Chuck Norris doesn’t breathe, he holds air hostage."
	},
	{
		id: 92,
		quote: "Chuck Norris can clap with one hand."
	},
	{
		id: 93,
		quote: "Chuck Norris doesn’t need to shave. His beard is scared to grow."
	},
	{
		id: 94,
		quote: "Before he forgot a gift for Chuck Norris, Santa Claus was real."
	},
	{
		id: 95,
		quote: "In an average living room there are a thousand objects Chuck Norris could use to kill you, including the room itself."
	},
	{
		id: 96,
		quote: "Chuck Norris invented airplanes because he was tired of being the only person that could fly."
	},
	{
		id: 97,
		quote: "Chuck Norris’s belly button is actually a power outlet."
	},
	{
		id: 98,
		quote: "Freddy Krueger has nightmares about Chuck Norris."
	},
	{
		id: 99,
		quote: "Chuck Norris is the only man who can fight himself and win."
	},
	{
		id: 100,
		quote: "Chuck Norris’s cowboy boots are made from real cowboys."
	}
];

app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

app.listen((port), () => {
    console.log(`API Server Running on http://localhost:${port}`);
});

