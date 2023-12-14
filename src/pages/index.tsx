import Head from 'next/head';
import { api } from '~/utils/api';

export default function Home() {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>The PutStack Example</title>
        <meta name="description" content="PutStack Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            PutStack Starter Template
          </h1>
          <p className="text-2xl text-white">{hello.data ? hello.data.greeting : 'Loading tRPC query...'}</p>
        </div>
      </main>
    </>
  );
}
