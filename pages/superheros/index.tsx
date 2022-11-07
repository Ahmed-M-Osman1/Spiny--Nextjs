import Nav from '../../components/nav';
import styles from '../../styles/Home.module.css';
import HerosCard from '../../components/herosCard';
import { characters } from '../../helper/characters';
import Link from 'next/link';

export const getStaticProps = async ()  => {
  return {
    props: {
      characters: characters,
    },
  };
};

export default function SuperHeros(): JSX.Element {
  return (
    <div>
      <Nav />
      <div className={styles.gridSelection}>
        {characters.map((character, index) => (
          <div>
            <Link href={`/superheros/${character.route}`} passHref>
              <HerosCard key={index} {...character} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
