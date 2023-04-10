import { GetStaticProps } from "next";
import { Sound } from ".";
import { data } from "./data";

function sortByTitle(a: Sound, b: Sound) {
  const aLowerTitle = a.title.toLowerCase();
  const bLowerTitle = b.title.toLowerCase();

  return aLowerTitle > bLowerTitle ? 1 : aLowerTitle < bLowerTitle ? -1 : 0;
}

const getStaticProps: GetStaticProps<{ sounds: Sound[] }> = async () => {
  return {
    props: {
      sounds: data.sort(sortByTitle),
    },
  };
};

export { getStaticProps };
