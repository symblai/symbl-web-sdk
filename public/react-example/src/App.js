import logo from './logo.svg';
import './App.css';
import Symbl from "./lib/es5/index";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjU2ODY3MDM2Mzk0OTQ2NTYiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiamt6dzZpck0xYUdUelhiczdqZ3d0RGV5R05QU0pMUU1AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI1OTYyNTAyLCJleHAiOjE2MjYwNDg5MDIsImF6cCI6Imprenc2aXJNMWFHVHpYYnM3amd3dERleUdOUFNKTFFNIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.BB2y9MgNf9A99tth4KwWK_-kFj7X2hQ7p19HxgjoEudK_NOAiZe4UlMciRu1ehgVWoIfU64YtsPbzTmtkDZovQebpIsQHGiWGCeLEKytEZilxnpDtfmXyGgG5B0DqjbdmvdlYIou-_esb0Y7f1eKyaJZWNKqQGFfO8gLehWRBi-9FVECDV-xjbvmrCCodxvD0kMugcQWKYzbB5BvYFl5wDx_6X7UJQ1Tzmf7a29S7niSqgIR_UvtdmtlHx5PLayT2YPRLV1LMnYWI4BoAzRKVZUfIkEUMGvqCpTLIqw5XwNMNMBmh_hZo1YwgnJsWWz9IXIfKq43D1R45yPBv3So-A";
const symbl = new Symbl(token);
let x = symbl.realtimeRequest.start();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
