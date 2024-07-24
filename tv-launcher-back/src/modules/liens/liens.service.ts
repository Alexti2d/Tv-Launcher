
import { Injectable } from '@nestjs/common';
import { Lien } from './interface/lien.interface';
const fs = require("fs");

const path: string = './data.json';

@Injectable()
export class LiensService {
  private liens: any = fs.readFileSync(path, "utf8", (error, data) => {
    if (error) {console.log(error); return;};
    var lesLiens: any = JSON.parse(JSON.stringify(data))
    return lesLiens;
  })

  writeJSON(tab) {
    fs.writeFileSync(path, JSON.stringify(tab), (error) => {
      if (error) {console.log('An error has occurred ', error); return;}
      console.log('Data written successfully to disk');
    });

    this.liens = JSON.stringify(tab)
  }

  create(nouveauLien: Lien) {
    var tab: any = JSON.parse(this.liens)
    tab.push(nouveauLien)

    this.writeJSON(tab)
  }

  findAll(): [Lien] {
    return JSON.parse(this.liens)
  }

  remove(id: string) {
    var tab: any = JSON.parse(this.liens);
    let i = 0;

    tab.forEach(lien => {
      if (parseInt(id) == lien.id) {
        tab.splice(i, 1);
      }
      i++;
    });

    this.writeJSON(tab)
  }

  update(modifLien: Lien) {
    this.remove(modifLien.id.toString())
    this.create(modifLien)
  }

}
