const os = require('os');

console.log('end of line', os.EOL);
console.log('cpu architecture', os.arch());
console.log('object commonly used operating system constants');
console.log(os.constants);
console.log('cpus', os.cpus());

console.log('endianess of cpu', os.endianness());
console.log('free memory in bytes', os.freemem());

console.log('home directory', os.homedir());

console.log('hostname of operating system', os.hostname());

console.log('number of loadaverage', os.loadavg());

console.log('network interfaces assigned a name', os.networkInterfaces());

console.log('platform I am running on', os.platform());

console.log('operating system release', os.release());

console.log('temp directory', os.tmpdir());

console.log('tota computer memory', os.totalmem());

console.log('identifies the op system', os.type());

console.log('system uptime', os.uptime());

console.log('user info:', os.userInfo());
