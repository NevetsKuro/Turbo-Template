import { Button } from 'ui';

export default function Docs() {
  const dummyFn = () => {console.log("Button clicked!")};
  return (
    <div>
      <h1>Documentation for predefined Components (v1.0.0)</h1>
      <br />
      <div className='doc-table'>
        <div>
          <h1>Button v1</h1>
        </div>
        <div>
          <Button title='Title here' callbackFn={() => dummyFn()} />
        </div>
      </div>
    </div>
  );
}
