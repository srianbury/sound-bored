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
    soundSrc:
      "https://www.myinstants.com/media/sounds/tim-allens-home-improvement-grunt.mp3",
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
        border: playing ? "10px solid red" : "5px solid transparent",
      }}
    >
      <img
        className="is-rounded circle-image"
        height="100px"
        width="100px"
        style={{
          objectFit: "cover",
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
      navigator.clipboard.writeText(soundSrc);
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
