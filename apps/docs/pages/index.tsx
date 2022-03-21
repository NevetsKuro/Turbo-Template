import Head from 'next/head';
import { Button, Divider } from 'ui';

export default function Docs() {
  const dummyFn = () => {
    console.log('Button clicked!');
  };
  return (
    <div>
      <Head>
        <title>Docs: Component list</title>
      </Head>
      <h1 className='text-4xl text-center mt-16'>
        Documentation for Components (v1.0.0)
      </h1>
      <br />
      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8'>
        <div className='w-2/3'>
          <h3 className='text-2xl font-semibold'>Button</h3>
          <em>Version: 1.0.0</em>
          <p>
            Buttons communicate actions that users can take. They are typically
            placed throughout your website UI, and they should be easily
            findable and identifiable while clearly indicating the action they
            allow a user to complete.
          </p>
        </div>
        <div className='w-1/3'>
          <div className='w-min mx-auto'>
            <Button title='First' callbackFn={() => dummyFn()} />
            <br />
            <br />
            <Button title='Second' callbackFn={() => dummyFn()} />
          </div>
        </div>
      </div>
      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8'>
        <div className='w-2/3'>
          <h3 className='text-2xl font-semibold'>Divider</h3>
          <em>Version: 1.0.0</em>
          <p>
            A divider is a thin line that groups content in lists and layouts.
          </p>
        </div>
        <div className='w-1/3'>
          <div className='w-full mx-auto'>
            <br />
            <br />
            <Divider color='blue' bgColor='blue'/>
          </div>
        </div>
      </div>
      <p className='text-xl text-center mt-2'>
        {process.env.NEXT_PUBLIC_MESSAGE}
      </p>
    </div>
  );
}
