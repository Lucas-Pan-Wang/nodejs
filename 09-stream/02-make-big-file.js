#!/usr/bin/node

const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
    file.write('icigasdgassaddssde daf gdsdafsdafsdafsagmagna gasdgaliqua. Ut enim ad minim veniam, quis nfdsafdasfsdagwergbveasgkfhqoiwfjqwiodjoasjdia djasidjalsj dklasjd aiofjqwoifjiwo ostrud e')
}

file.end();
