const http = require('http');
const { spawn } = require('child_process');

// Creates an object from command line args in key=value format,
// ex: 'arg1=value1' is added as {arg1: value1} in the object.
const args = process.argv
  .slice(2)
  .filter((arg) => arg.includes('='))
  .reduce((acc, arg) => {
    const argSplit = arg.split('=');
    acc[argSplit[0]] = argSplit[1];
    return acc;
  }, {});

// if no port is provided, default to 5173.
const PORT = args.port || 5173;

// Runs 'npm run start-react' command in a new process & inherits the
// stdio stream from the parent process, also sets PORT env variable
const react = spawn('npm', ['run', 'start-react'], {
  stdio: 'inherit',
  env: { ...process.env, PORT }
});

let electron = undefined;

// Recursively calls it self every second. When the React server starts,
// it runs "npm run start-electron" command & inherits the stdio stream
// from the parent process, also sets the APP_PORT env variable, which
// is used by us in electron when handeling new windows.
function checkServer(port) {
  console.log('Checking url:', `http://localhost:${port}`);
  http
    .get(`http://localhost:${port}`, (res) => {
      console.log('Response:', res.statusCode, res.statusMessage);
      if (res.statusCode === 200) {
        electron = spawn('npm', ['run', 'start-electron'], {
          stdio: 'inherit',
          env: { ...process.env, APP_PORT: PORT }
        });
      } else {
        console.log('Not 200, trying again.');
        retryCheckServer(port);
      }
    })
    .on('error', (e) => {
      console.log('Not 200, trying again.', e.message);
      retryCheckServer(port);
    });
}

function retryCheckServer(port) {
  setTimeout(() => checkServer(port), 1000);
}


// Ensures that the child process is killed and script exits cleanly
// when user presses 'CTRL + C' in command line
process.on('SIGINT', () => {
  react.kill();
  if (electron) electron.kill();
  process.exit();
});

checkServer(PORT);
