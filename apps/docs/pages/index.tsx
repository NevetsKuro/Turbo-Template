import Head from 'next/head';
import { Button, Chips, Divider, Heading } from 'ui';

export default function Docs() {
  const dummyFn = () => {
    console.log('Button clicked!');
  };
  return (
    <div>
      <Head>
        <title>Docs: Component list</title>
      </Head>
      <Heading title={'Documentation for Components (v1.0.0)'} />
      <br />
      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8'>
        <div className='w-2/3 border-r-2 border-gray-300'>
          <h3 className='text-2xl font-semibold'>Button</h3>
          <em>Version: 1.0.0</em>
          <p className='w-10/12'>
            Buttons communicate actions that users can take. They are typically
            placed throughout your website UI, and they should be easily
            findable and identifiable while clearly indicating the action they
            allow a user to complete.
          </p>
        </div>
        <div className='w-1/3'>
          <div className='w-min mx-auto'>
            <Button
              title='Primary'
              color='#ffffff'
              bgColor='#f64545'
              callbackFn={() => dummyFn()}
            />
            <br />
            <br />
            <Button
              title='Scondary'
              color='#ffffff'
              bgColor='#04a4e8'
              callbackFn={() => dummyFn()}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8 border-t-2 border-blue-600'>
        <div className='w-2/3 border-r-2 border-gray-300'>
          <h3 className='text-2xl font-semibold'>Divider</h3>
          <em>Version: 1.0.0</em>
          <p>
            A divider is a thin line that groups content in lists and layouts.
          </p>
        </div>
        <div className='w-1/3'>
          <div className='w-full mx-auto px-16'>
            <br />
            <br />
            <Divider color='blue' bgColor='blue' />
          </div>
        </div>
      </div>

      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8 border-t-2 border-blue-600'>
        <div className='w-2/3 border-r-2 border-gray-300'>
          <h3 className='text-2xl font-semibold'>Header</h3>
          <em>Version: 1.0.0</em>
          <p>Used as replacement for H1 Header</p>
        </div>
        <div className='w-1/3'>
          <div className='w-full mx-auto'>
            <Heading title='A Heading' />
          </div>
        </div>
      </div>

      <div className='flex flex-row bg-blue-100 w-10/12 mx-auto p-8 border-t-2 border-blue-600'>
        s
        <div className='w-2/3 border-r-2 border-gray-300'>
          <h3 className='text-2xl font-semibold'>Chips</h3>
          <em>Version: 1.0.0</em>
          <p>Use to capsulate a text in a badge/chip shape</p>
        </div>
        <div className='w-1/3'>
          <div className='w-full mx-auto flex justify-center items-center'>
            <br />
            <br />
            <br />
            <Chips ingredient='Chip One' />
          </div>
        </div>
      </div>
      <p className='text-xl text-center mt-2'>
        {process.env.NEXT_PUBLIC_MESSAGE}
      </p>
    </div>
  );
}
