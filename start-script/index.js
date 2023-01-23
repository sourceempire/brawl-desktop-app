const http = require('http');
const { spawn } = require('child_process');

// Creates an object from command line args in key=value format,
// ex: 'arg1=value1' is added as {arg1: value1} in the object.
const arguments = process.argv
  .slice(2)
  .filter((arg) => arg.includes('='))
  .reduce((acc, arg) => {
    const argSplit = arg.split('=');
    acc[argSplit[0]] = argSplit[1];
    return acc;
  }, {});

// if no port is provided, default to 3000.
const PORT = arguments.port || 3000;

// Runs 'npm run start-react' command in a new process & inherits the
// stdio stream from the parent process, also sets PORT env variable
const child = spawn('npm', ['run', 'start-react'], {
  stdio: 'inherit',
  env: { ...process.env, PORT }
});

// Ensures that the child process is killed and script exits cleanly
// when user presses 'CTRL + C' in command line
process.on('SIGINT', () => {
  child.kill();
  process.exit();
});

checkServer(PORT);

// Recursively calls it self every second. When the React server starts,
// it runs "npm run start-electron" command & inherits the stdio stream
// from the parent process, also sets the APP_PORT env variable, which
// is used by us in electron when handeling new windows.
function checkServer(port) {
  http
    .get(`http://127.0.0.1:${port}`, (res) => {
      if (res.statusCode === 200) {
        spawn('npm', ['run', 'start-electron'], {
          stdio: 'inherit',
          env: { ...process.env, APP_PORT: PORT }
        });
      } else {
        retryCheckServer(port);
      }
    })
    .on('error', (e) => {
      retryCheckServer(port);
    });
}

function retryCheckServer(port) {
  setTimeout(() => checkServer(port), 1000);
}
