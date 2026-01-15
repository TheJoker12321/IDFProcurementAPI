import fs from 'fs'


export async function readJsonFile(path) {

    return await fs.promises.readFile(path, 'utf8')

}