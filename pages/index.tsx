import Image from "next/image";
import Head from 'next/head'
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>The Lusaca Portfolio</title>
      </Head>
      <div className="text-center">
        <Image
          src="/icon.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h1 className="text-center text-7xl font-sans font-bold">Lusaca</h1>
      <p className="text-center text-2xl font-mono">
        プログラミングを趣味としている中学生
      </p>
    </>
  );
};
export default IndexPage;
