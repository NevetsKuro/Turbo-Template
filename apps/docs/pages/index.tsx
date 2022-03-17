import Head from 'next/head';
import { Button } from 'ui';

export default function Docs() {
  const dummyFn = () => {console.log("Button clicked!")};
  return (
    <div>
      <Head>
        <title>Docs: Component list</title>
      </Head>
      <h1 className='text-4xl text-center mt-16'>Documentation for predefined Components (v1.0.0)</h1>
      <br />
      <div className='doc-table'>
        <div>
          <h1>Button v1</h1>
        </div>
        <div>
          <Button title='Title here' callbackFn={() => dummyFn()} />
        </div>
      </div>
      <p className="text-xl font-bold underline text-center">{process.env.NEXT_PUBLIC_MESSAGE}</p>
    </div>
  );
}
