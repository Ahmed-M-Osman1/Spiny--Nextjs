import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../components/nav';
import SelectionCard from '../components/selectionCard';
import { generateRandomRoute } from '../helper/generateRandom';
import { Heading } from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Spiny - Random Movie App</title>
        <meta name="description" content="Spiny - Random Movie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <Heading
          lineHeight={1.5}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
        >
          Welcome to Spiny.
        </Heading>
        <Heading
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
          textAlign={'center'}
        >
          A web APP that recommend a Movie to watch :)
        </Heading>
        <div className={styles.grid}>
          <div className={styles.card}>
            <SelectionCard
              photo={'/The_Marvel_Universe.png'}
              text="Select a Hero"
              link={'/superheros/'}
            />
          </div>
          <Heading
            lineHeight={1.5}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          >
            OR
          </Heading>
          <div className={styles.card}>
            <SelectionCard
              photo={'/search.webp'}
              text="Select a Random Movie"
              link={`/superheros/${generateRandomRoute()}`}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
