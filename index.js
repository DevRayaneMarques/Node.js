// Core modules = módulos embutidos

//Módulo operational system (os)
//const os = require("os");

//console.log(os.arch());//Architetura (32,64, ou outro)
//console.log(os.platform());//windows, unix
//console.log(os.type());//windows, linux
//console.log(os.version());
//console.log(os.uptime());
//console.log(os.freemem()); //bytes
//console.log(os.totalmem());//bytes
//console.log(os.cpus().length);
//console.log(os.homedir());
//console.log(os.hostname());

//Módulo fs = filesystem
const fs = require("fs");
const os = require("os");

// Escreve o texto em um novo arquivo
fs.writeFileSync("./batata.txt", "BATATA É BOM DEMAIS");

//Sistemas de informações
const platform = os.platform();
const arch = os.arch();
const hostname = os.hostname();
const release = os.release();
const uptime = os.uptime();
const cpus = os.cpus();
const totalMem = os.totalmem();
const freeMem = os.freemem();

const info = `Platform: ${platform}\nArchitecture: ${arch}\nHostname: ${hostname}\nRelease: ${release}\nUptime: ${uptime}s\n\nCPU:\n${JSON.stringify(cpus, null, 2)}\n\nMemory:\nTotal: ${totalMem} bytes\nFree: ${freeMem} bytes`;

fs.writeFile('system-info.txt', info, (err) => {
    if (err) throw err;
    console.log(os);
});

const arquivo = fs.readFileSync("./batata.txt");
console.log(arquivo.toString())