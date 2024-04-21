

var nameList = [
    'Tame','Past','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export const messages = [
    "Hi there! 😊",
    "How's it going? 🤔",
    "What are you up to? 🤷‍♂️",
    "I'm feeling great today! 😎",
    "Any plans for the weekend? 🎉",
    "This weather is amazing! ☀️",
    "Did you watch that new movie? 🎬",
    "I need some help with this. 🆘",
    "Let's grab lunch sometime! 🍔",
    "Check out this cool article I found. 📰",
    "I'm so excited for the concert! 🎵",
    "Can you believe what happened yesterday? 😱",
    "Just wanted to say hi! 👋",
    "I'm bored, entertain me! 🙄",
    "Where did you go on vacation? ✈️",
    "I'm swamped with work. 💼",
    "Let's meet up later. 🕒",
    "What's your favorite food? 🍕",
    "I'm learning a new language. 🗣️",
    "Have you tried that new restaurant? 🍽️",
    "I'm tired, need some rest. 😴",
    "Let's go for a hike! 🥾",
    "What's your favorite book? 📚",
    "I'm listening to this amazing song! 🎶",
    "How was your day? 🌟",
    "Let's talk about something interesting. 💡",
    "I'm craving some pizza. 🍕",
    "Tell me a joke! 😄",
    "I'm in a good mood today. 😀",
    "Did you hear about the news? 📰",
    "I'm feeling stressed out. 😓",
    "Let's play a game! 🎲",
    "What's the best movie you've watched recently? 🎥",
    "I'm working on a new project. 💻",
    "Let's go for a run! 🏃",
    "I'm feeling lazy today. 😴",
    "What's your favorite hobby? 🎨",
    "I'm watching this awesome series. 📺",
    "Do you have any pets? 🐶",
    "I'm excited for the holidays! 🎄",
    "Let's do something fun! 🎉",
    "What's your dream vacation? 🏖️",
    "I'm feeling adventurous! 🚀",
    "How's your family doing? 👨‍👩‍👧‍👦",
    "I'm feeling nostalgic. 📼",
    "Let's go to the beach! 🏖️",
    "What's your favorite sport? ⚽",
    "I'm feeling hungry. 🍽️",
    "I'm trying out a new recipe. 🥘",
    "Let's go shopping! 🛍️",
    "What's the best advice you've ever received? 💬",
    "I'm feeling inspired today. 💡"
  ];

var finalName = ""

export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export function generateRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}