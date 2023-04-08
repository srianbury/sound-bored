import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

type Sound = {
  title: string;
  soundSrc: string;
  imageSrc?: string;
  volume?: number;
};

const sounds: Sound[] = [
  {
    title: "Tim Allen Huh Grunt",
    soundSrc: "/assets/sounds/tim-allens-home-improvement-grunt.mp3",
    imageSrc: "https://i.ytimg.com/vi/KnsiZOJjfUg/mqdefault.jpg",
  },
  {
    title: "oohwahahahah",
    soundSrc:
      "https://www.myinstants.com/media/sounds/david-oohwahahahah-1.mp3",
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/a/a2/TheSickness.jpg",
  },
  {
    title: "Okayyyy, let's go",
    soundSrc: "https://www.myinstants.com/media/sounds/okeyyy-lets-go.mp3",
    imageSrc: "https://media.tenor.com/kA9FRdP2JU4AAAAd/okay-lets.gif",
  },
  {
    title: "Diarrhea!",
    soundSrc: "https://www.myinstants.com/media/sounds/dee-to-the-ree-mp3.mp3",
    imageSrc: "https://pbs.twimg.com/media/ETzP4SUUYAE0Ak1.jpg",
  },
  {
    title: "Allllrighty then",
    soundSrc:
      "https://www.myinstants.com/media/sounds/alrighty-then_mAGSIzC.mp3",
    imageSrc:
      "https://media.tenor.com/SKx34KvhMkwAAAAM/alright-then-ace-ventura.gif",
  },
  {
    title: "It's a bagel",
    soundSrc: "https://www.myinstants.com/media/sounds/its-a-bagel.mp3",
    imageSrc:
      "https://d3p8a4j2.rocketcdn.me/wp-content/uploads/2022/07/Blake-Anderson-Its-A-Bagel.png",
  },
  {
    title: "That's a huge b*tch",
    soundSrc: "https://www.myinstants.com/media/sounds/huge-bitch.mp3",
    imageSrc:
      "https://i.pinimg.com/564x/08/ed/97/08ed97c6ff434c4bb5c19fbd38e5a012.jpg",
  },
  {
    title: "Wake up!",
    soundSrc: "https://www.myinstants.com/media/sounds/wake-up_42uLTpb.mp3",
    imageSrc:
      "https://townsquare.media/site/366/files/2018/06/System-of-a-Down-Chop-Suey.jpg?w=600&h=0&zc=1&s=0&a=t&q=89",
  },
  {
    title: "Trojan Man!",
    soundSrc: "https://www.myinstants.com/media/sounds/trojanman.mp3",
    imageSrc:
      "https://static-prod.adweek.com/wp-content/uploads/2018/08/trojan-man-bigsexy-PAGE-2018.jpg",
  },
  {
    title: "Well why don't you cry about it?",
    soundSrc:
      "https://www.myinstants.com/media/sounds/why-dont-you-cry-about-it.mp3",
    imageSrc:
      "https://media.tenor.com/C5qJx8PfKCEAAAAC/jim-carrey-ace-ventura.gif",
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
  { title: "HoldUp", soundSrc: "/assets/sounds/HoldUp.mp3" },
  {
    title: "HomeImprovementGrunt",
    soundSrc: "/assets/sounds/HomeImprovementGrunt.mp3",
  },
  { title: "Hot Hot Hot", soundSrc: "/assets/sounds/HotHotHot.mp3" },
  {
    title: "Huge Fuckin Boner",
    soundSrc: "/assets/sounds/HugeFuckinBoner.mp3",
  },
  {
    title: "I Cant Stop Eating",
    soundSrc: "/assets/sounds/ICantStopEating.mp3",
  },
  {
    title: "I Dont Give A Fuck",
    soundSrc: "/assets/sounds/IDontGiveAFuck.mp3",
  },
  { title: "I Love It", soundSrc: "/assets/sounds/ILoveIt.mp3" },
  { title: "I Still Love You", soundSrc: "/assets/sounds/IStillLoveYou.mp3" },
  { title: "Im A Man", soundSrc: "/assets/sounds/ImAMan.mp3" },
  { title: "Im Pissed Now", soundSrc: "/assets/sounds/ImPissedNow.mp3" },
  { title: "Im So Excited", soundSrc: "/assets/sounds/ImSoExcited.mp3" },
  { title: "Im Sorry Momma", soundSrc: "/assets/sounds/ImSorryMomma.mp3" },
  { title: "Is It Real", soundSrc: "/assets/sounds/IsItReal.mp3" },
  { title: "Its A Bagel", soundSrc: "/assets/sounds/ItsABagel.mp3" },
  { title: "Its The Best", soundSrc: "/assets/sounds/ItsTheBest.mp3" },
  { title: "Know What I Mean", soundSrc: "/assets/sounds/KnowWhatIMean.mp3" },
  { title: "Kyle Betrayed Me", soundSrc: "/assets/sounds/KyleBetrayedMe.mp3" },
  { title: "Lets A Go", soundSrc: "/assets/sounds/LetsAGo.mp3" },
  { title: "Lets Go", soundSrc: "/assets/sounds/LetsGo.mp3" },
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
  { title: "Satan", soundSrc: "/assets/sounds/Satan.mp3" },
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
  { title: "Thats Life", soundSrc: "/assets/sounds/ThatsLife.mp3" },
  { title: "TrojanM an", soundSrc: "/assets/sounds/TrojanMan.mp3" },
  { title: "Weird Wild Stuff", soundSrc: "/assets/sounds/WeirdWildStuff.mp3" },
  {
    title: "Well Why Dont You Cry About It",
    soundSrc: "/assets/sounds/WellWhyDontYouCryAboutIt.mp3",
  },
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
    title: "Youre Not That Guy Pal",
    soundSrc: "/assets/sounds/YoureNotThatGuyPal.mp3",
  },
];

async function playSoundAndWait(audio: HTMLAudioElement) {
  return new Promise((res) => {
    audio.play();
    audio.onended = res;
  });
}

type SoundByteProps = {
  sound: Sound;
};
function SoundByte({ sound }: SoundByteProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const { title, soundSrc, imageSrc } = sound;

  async function playSound() {
    setPlaying(true);
    await playSoundAndWait(new Audio(soundSrc));
    setPlaying(false);
  }

  return (
    <span>
      <PlaySoundButton
        playSound={playSound}
        playing={playing}
        imageSrc={imageSrc}
        title={title}
      />
      <TitleWithCopy title={title} soundSrc={soundSrc} playSound={playSound} />
    </span>
  );
}

type PlaySoundButtonProps = {
  playing: boolean;
  imageSrc?: string;
  title: string;
  playSound: () => Promise<void>;
};
function PlaySoundButton({
  playing,
  imageSrc,
  title,
  playSound,
}: PlaySoundButtonProps) {
  return (
    <button
      className="is-rounded"
      onClick={playSound}
      style={{
        padding: "0px",
      }}
    >
      <img
        className="is-rounded circle-image"
        height="100px"
        width="100px"
        style={{
          objectFit: "cover",
          border: playing ? "10px solid red" : "none",
        }}
        src={
          imageSrc ||
          "https://yt3.googleusercontent.com/wwzTo5z0HXjfOtDP-qNAO06UQvAZQkHDBKGA6k2VrfT4J8P_KVQCUpkcazwuqfbdOxNDK6rLNw=s176-c-k-c0x00ffffff-no-rj"
        }
        alt={title}
      />
    </button>
  );
}

type TitleWithCopyProps = {
  title: string;
  soundSrc: string;
  playSound: () => Promise<void>;
};
function TitleWithCopy({ title, soundSrc, playSound }: TitleWithCopyProps) {
  function copyLinkToClipboard() {
    playSound();

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      const mp3Url =
        soundSrc[0] === "/" ? `${window.location.origin}${soundSrc}` : soundSrc;
      navigator.clipboard.writeText(mp3Url);
      toast.success("Sound URL copied to your clipboard!");
    } else {
      toast.error("Sorry! The sound could not be copied to your clipboard.");
    }
  }

  return (
    <div>
      <div className="text-center display-inline mr-1">{title}</div>
      <button onClick={copyLinkToClipboard} className="copy-button">
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="row">
        {sounds.map((sound) => (
          <div
            className="col-12 col-6-xs col-4-sm col-3-md col-2-lg text-center"
            style={{
              marginBottom: "20px",
            }}
            key={sound.soundSrc}
          >
            <SoundByte sound={sound} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Home };
