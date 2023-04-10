import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { Sound } from "./types";
import { getStaticProps } from "./getStaticProps";

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
      <Image
        className="is-rounded circle-image"
        height={100}
        width={100}
        style={{
          objectFit: "cover",
          border: playing ? "10px solid red" : "none",
        }}
        src={imageSrc || "/assets/images/tii.jpeg"}
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

type HomeProps = {
  sounds: Sound[];
};
function Home({ sounds }: HomeProps) {
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

export { Home, getStaticProps };
export type { Sound };
