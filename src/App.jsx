import {useRef, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};

function DialogComponent() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      <dialog ref={dialogRef} style={{margin: 'auto', padding: '24px'}}>
        <Counter />
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </div>
  );
}

function RegularComponent() {
  return (
    <div>
      <h3>Regular Component</h3>
      <Counter />
    </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <h1>React DevTools TraceUpdates Demo</h1>
        <p>
          Demonstrates how React DevTools highlighting works with top-layer
          elements (Popover API & Dialog)
        </p>
      </header>

      <main>
        <div>
          <h2>Standard Component</h2>
          <p>Updates are easily visible with DevTools highlighting</p>
          <div>
            <RegularComponent />
          </div>
        </div>

        <div>
          <h2>Dialog Element Demo</h2>
          <p>
            Uses the HTML <code>&lt;dialog&gt;</code> element which renders in
            the toplayer
          </p>
          <div>
            <DialogComponent />
          </div>
        </div>
      </main>

      <div>
        <h2>How to Test:</h2>
        <ol>
          <li>Open Chrome DevTools</li>
          <li>
            Go to <strong>Components</strong> tab
          </li>
          <li>
            In the settings (⚙️), enable{' '}
            <strong>"Highlight updates when components render"</strong>
          </li>
          <li>Click the update buttons and observe highlighting</li>
          <li>
            <strong>Without the fix:</strong> Highlighting won't appear above
            dialog
          </li>
          <li>
            <strong>With the fix:</strong> Highlighting appears correctly above
            dialog
          </li>
        </ol>
      </div>

      <footer>
        <p>
          Demo for{' '}
          <a
            href="https://github.com/facebook/react/pull/32614"
            target="_blank">
            PR #32614
          </a>
          : Use Popover API for TraceUpdates highlighting
        </p>
      </footer>
    </div>
  );
}

export default App;
