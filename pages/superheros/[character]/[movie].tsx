import { characters } from '../../../api/characters';
import { useRouter } from 'next/router';

type Parameters = {
  movie: string;
  character: string;
};

export const getStaticPaths = async () => {
  const router = useRouter();
  const query = router;
  const paths: object = characters.map((character) => ({
    params: {
      character: character.route.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: Parameters;
}) => {
  console.log(params);
  // let res: Array<object> = [];
  // await apiInstance
  //   .get(`/SearchTitle/k_4rgq7u85/${selectedHero[0].route}`)
  //   .then((response) => {
  //     if (response.data) {
  //       res = response.data.results;
  //       return res;
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  return {};
};

export default function movie() {
  return <div>Hi from movie</div>;
}
