import fs from 'fs';
import path from 'path';

export function readCarouselFiles():string[]{
    const directoryPath = path.join(process.cwd(), 'public/images/carousel');
	const files = fs.readdirSync(directoryPath);
	console.log(files)
	console.log(directoryPath)
    return files;

}