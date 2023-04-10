import { Sound } from ".";

const data: Sound[] = [
  {
    title: "Tim Allen Huh Grunt",
    soundSrc: "/assets/sounds/tim-allens-home-improvement-grunt.mp3",
    imageSrc: "/assets/images/tim-allen-huh-grunt.jpg",
  },
  {
    title: "oohwahahahah",
    soundSrc: "/assets/sounds/oohwahahahah.mp3",
    imageSrc: "/assets/images/oohwahahahah.jpg",
  },
  {
    title: "Okayyyy, let's go",
    soundSrc: "/assets/sounds/okeyyy-lets-go.mp3",
    imageSrc: "/assets/images/okeyyy-lets-go.gif",
  },
  {
    title: "Diarrhea!",
    soundSrc: "/assets/sounds/diarrhea.mp3",
    imageSrc: "/assets/images/diarrhea.jpg",
  },
  {
    title: "Allllrighty then",
    soundSrc: "/assets/sounds/alrighty-then.mp3",
    imageSrc: "/assets/images/alrighty-then.gif",
  },
  {
    title: "It's a bagel",
    soundSrc: "/assets/sounds/its-a-bagel.mp3",
    imageSrc: "/assets/images/its-a-bagel.png",
  },
  {
    title: "That's a huge b*tch",
    soundSrc: "/assets/sounds/huge-bitch.mp3",
    imageSrc: "/assets/images/huge-bitch.jpg",
  },
  {
    title: "Wake up!",
    soundSrc: "/assets/sounds/wake-up.mp3",
    imageSrc: "/assets/images/wake-up.jpg",
  },
  {
    title: "Trojan Man!",
    soundSrc: "/assets/sounds/trojan-man.mp3",
    imageSrc: "/assets/images/trojan-man.jpg",
  },
  {
    title: "Well why don't you cry about it?",
    soundSrc: "/assets/sounds/WellWhyDontYouCryAboutIt.mp3",
    imageSrc: "/assets/images/why-dont-you-cry-about-it.gif",
  },
  {
    title: "Are you having a laugh?",
    soundSrc: "/assets/sounds/are-you-having-a-laugh.mp3",
    imageSrc: "/assets/images/are-you-having-a-laugh.png",
  },
  {
    title: "Ayo! Maggots!",
    soundSrc: "/assets/sounds/ayo-maggots.mp3",
    imageSrc: "/assets/images/ayo-maggots.png",
  },
  {
    title: "damn!",
    soundSrc: "/assets/sounds/damn.mp3",
  },
  {
    title: "Disappointed!",
    soundSrc: "/assets/sounds/disappointed.mp3",
    imageSrc: "/assets/images/disappointed.png",
  },
  {
    title: "doo-doo",
    soundSrc: "/assets/sounds/doo-doo.mp3",
    imageSrc: "/assets/images/doo-doo.png",
  },
  {
    title: "Friendship",
    soundSrc: "/assets/sounds/friendship.mp3",
    imageSrc: "/assets/images/friendship.png",
  },
  {
    title: "fuck it!",
    soundSrc: "/assets/sounds/fuck-it.mp3",
  },
  {
    title: "good luck",
    soundSrc: "/assets/sounds/good-luck.mp3",
    imageSrc: "/assets/images/good-luck.png",
  },
  {
    title: "hated it!",
    soundSrc: "/assets/sounds/hated-it.mp3",
    imageSrc: "/assets/images/hated-it.png",
  },
  {
    title: "Mrs. Doubtfire Hello!",
    soundSrc: "/assets/sounds/doubtfire-hello.mp3",
    imageSrc: "/assets/images/doubtfire-hello.png",
  },
  {
    title: "I'm so fuckin hungry",
    soundSrc: "/assets/sounds/im-so-fuckin-hungry.mp3",
    imageSrc: "/assets/images/im-so-fuckin-hungry.jpg",
  },
  {
    title: "Fuckin thing sucks!",
    soundSrc: "/assets/sounds/fuckin-thing-sucks.mp3",
    imageSrc: "/assets/images/fuckin-thing-sucks.png",
  },
  { title: "HoldUp", soundSrc: "/assets/sounds/HoldUp.mp3" },
  { title: "Hot Hot Hot", soundSrc: "/assets/sounds/HotHotHot.mp3" },
  {
    title: "Huge Fuckin Boner",
    soundSrc: "/assets/sounds/HugeFuckinBoner.mp3",
  },
  {
    title: "I Can't Stop Eating",
    soundSrc: "/assets/sounds/ICantStopEating.mp3",
  },
  {
    title: "I Don't Give A Fuck",
    soundSrc: "/assets/sounds/IDontGiveAFuck.mp3",
  },
  { title: "I Love It", soundSrc: "/assets/sounds/ILoveIt.mp3" },
  { title: "I Still Love You", soundSrc: "/assets/sounds/IStillLoveYou.mp3" },
  { title: "I'm A Man", soundSrc: "/assets/sounds/ImAMan.mp3" },
  { title: "I'm Pissed Now", soundSrc: "/assets/sounds/ImPissedNow.mp3" },
  { title: "I'm So Excited", soundSrc: "/assets/sounds/ImSoExcited.mp3" },
  { title: "I'm Sorry Momma", soundSrc: "/assets/sounds/ImSorryMomma.mp3" },
  { title: "Is It Real", soundSrc: "/assets/sounds/IsItReal.mp3" },
  { title: "It's The Best", soundSrc: "/assets/sounds/ItsTheBest.mp3" },
  { title: "Know What I Mean", soundSrc: "/assets/sounds/KnowWhatIMean.mp3" },
  { title: "Kyle Betrayed Me", soundSrc: "/assets/sounds/KyleBetrayedMe.mp3" },
  { title: "Let's A Go", soundSrc: "/assets/sounds/LetsAGo.mp3" },
  { title: "Let's GEAUX", soundSrc: "/assets/sounds/LetsGo.mp3" },
  {
    title: "Living In A Nightmare",
    soundSrc: "/assets/sounds/LivingInANightmare.mp3",
  },
  { title: "No", soundSrc: "/assets/sounds/No.mp3" },
  { title: "Notice Me Senpai", soundSrc: "/assets/sounds/NoticeMeSenpai.mp3" },
  { title: "Oh I Like That", soundSrc: "/assets/sounds/OhILikeThat.mp3" },
  { title: "Oh My God", soundSrc: "/assets/sounds/OhMyGod.mp3" },
  { title: "Oh My God Wow", soundSrc: "/assets/sounds/OhMyGodWow.mp3" },
  { title: "Ow Ow Ow Stop", soundSrc: "/assets/sounds/OwOwOwStop.mp3" },
  { title: "Perfect", soundSrc: "/assets/sounds/Perfect.mp3" },
  { title: "Pizza Pizza", soundSrc: "/assets/sounds/PizzaPizza.mp3" },
  { title: "Popo Zao", soundSrc: "/assets/sounds/PopoZao.mp3" },
  {
    title: "Rippin And The Tearin",
    soundSrc: "/assets/sounds/RippinAndTheTearin.mp3",
  },
  { title: "Satan?", soundSrc: "/assets/sounds/Satan.mp3" },
  { title: "Sensitive", soundSrc: "/assets/sounds/Sensitive.mp3" },
  {
    title: "Shes Got A Great Ass",
    soundSrc: "/assets/sounds/ShesGotAGreatAss.mp3",
  },
  { title: "Shikaka", soundSrc: "/assets/sounds/Shikaka.mp3" },
  { title: "Shut Da Fuk Up", soundSrc: "/assets/sounds/ShutDaFukUp.mp3" },
  { title: "Shut Up", soundSrc: "/assets/sounds/ShutUp.mp3" },
  { title: "Shut Up Bitch", soundSrc: "/assets/sounds/ShutUpBitch.mp3" },
  {
    title: "Smoke Weed Everyday",
    soundSrc: "/assets/sounds/SmokeWeedEveryday.mp3",
  },
  { title: "Smokin", soundSrc: "/assets/sounds/Smokin.mp3" },
  {
    title: "Still Gonna Send It",
    soundSrc: "/assets/sounds/StillGonnaSendIt.mp3",
  },
  { title: "Thank You God", soundSrc: "/assets/sounds/ThankYouGod.mp3" },
  { title: "That's Life", soundSrc: "/assets/sounds/ThatsLife.mp3" },
  { title: "Weird Wild Stuff", soundSrc: "/assets/sounds/WeirdWildStuff.mp3" },
  { title: "Were Back", soundSrc: "/assets/sounds/WereBack.mp3" },
  { title: "Winning", soundSrc: "/assets/sounds/Winning.mp3" },
  { title: "Yeah", soundSrc: "/assets/sounds/Yeah.mp3" },
  { title: "Yes Points", soundSrc: "/assets/sounds/YesPoints.mp3" },
  { title: "You Are So Dumb", soundSrc: "/assets/sounds/YouAreSoDumb.mp3" },
  { title: "You Idiots", soundSrc: "/assets/sounds/YouIdiots.mp3" },
  { title: "You Lose", soundSrc: "/assets/sounds/YouLose.mp3" },
  {
    title: "Your Boobs Are Huge",
    soundSrc: "/assets/sounds/YourBoobsAreHuge.mp3",
  },
  {
    title: "You're Not That Guy Pal",
    soundSrc: "/assets/sounds/YoureNotThatGuyPal.mp3",
  },
];

export { data };
