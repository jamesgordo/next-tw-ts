import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:h-screen py-16 flex flex-col sm:justify-center items-center">
        <h1 className="m-0 leading-tight text-[4rem] text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-[#0070f3] hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center my-16 text-2xl leading-normal">
          Get started by editing{' '}
          <code className="bg-[#fafafa] p-3 text-sm rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center flex-wrap max-w-[800px]">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 border rounded-xl max-w-[300px] transition-all ease-in group hover:text-[#0070f3] hover:border-[#0070f3]"
          >
            <h2 className="m-0 text-xl leading-normal mb-4">
              Documentation &rarr;
            </h2>
            <p className="m-0">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 p-6 border rounded-xl max-w-[300px] transition-all ease-in group hover:text-[#0070f3] hover:border-[#0070f3]"
          >
            <h2 className="m-0 text-xl leading-normal mb-4">Learn &rarr;</h2>
            <p className="m-0">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="m-4 p-6 border rounded-xl max-w-[300px] transition-all ease-in group hover:text-[#0070f3] hover:border-[#0070f3]"
          >
            <h2 className="m-0 text-xl leading-normal mb-4">Examples &rarr;</h2>
            <p className="m-0">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 border rounded-xl max-w-[300px] transition-all ease-in group hover:text-[#0070f3] hover:border-[#0070f3]"
          >
            <h2 className="m-0 text-xl leading-normal mb-4">Deploy &rarr;</h2>
            <p className="m-0">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="py-8 flex justify-center items-center border-t border-[#eaeaea]">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="flex justify-center items-center grow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
