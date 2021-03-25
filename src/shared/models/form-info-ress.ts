
export class FormInfoRess {
    private readonly titres: any;
    private readonly forms: any;
    private arrayData = new Array<string>();
    constructor(titres: any, forms: any) {
      this.titres = titres;
      this.forms = forms;
      this.wrapper();
    }
    private wrapper(): void {
      this.createActuelle();
      this.createAvant();
      this.createVosress();
      this.createConjointress();
    }
    private createActuelle(): void {
      const ressa = `${this.titres.libressact} ${this.forms.ressourcea}`;
      this.arrayData.push(ressa);
    }
    private createAvant(): void {
        const ressav = `${this.titres.libressavtdc} ${this.forms.ressourceav}`;
        this.arrayData.push(ressav);
    }
    private createVosress(): void {
        const ressvos = `${this.titres.libvous} ${this.forms.ressourcev}`;
        this.arrayData.push(ressvos);
    }
    private createConjointress(): void {
        const ressco = `${this.titres.libvotrecjt} ${this.forms.ressourcec}`;
        this.arrayData.push(ressco);
    }
    public getData(): Array<string> {
      return this.arrayData;
    }
  
  }
  