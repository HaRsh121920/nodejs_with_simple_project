import { appendFile } from 'fs';
import {readFile,writeFile} from 'fs/promises'


// // read file

const read_file = async(fileName) =>{
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
};

// read_file('sample.txt')


// create file 
const create_file = async (fileName, content) =>{
    await writeFile(fileName,content);
    console.log("kya baat h bro ");
}
create_file('ai.py','this is the power');


// data appendFile