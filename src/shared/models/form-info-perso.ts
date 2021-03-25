
export class FormInfoPerso {
  private readonly titres: any;
  private readonly forms: any;
  private arrayData = new Array<string>();
  constructor(titres: any, forms: any) {
    this.titres = titres;
    this.forms = forms;
    this.wrapper();
  }
  private wrapper(): void {
    this.createDate();
    this.createMarried();
    this.createDeceased();
    this.createCouple();
  }
  private createDate(): void {
    const dateNaiss = `${this.titres.libDateNaiss} ${this.forms.jour}/${this.forms.mois}/${this.forms.annee}`;
    this.arrayData.push(dateNaiss);
  }
  private createMarried(): void {
    const married = (this.forms.marie.toLowerCase() === 'oui') ? this.titres.libcploui : this.titres.libcplnon;
    this.arrayData.push(married);
  }
  private createDeceased(): void {
    if (this.forms.decee == null || this.forms.decee.toLowerCase() === 'non'){
      this.arrayData.push( this.titres.libMarieConjointDcdNon);
    }else {
      this.arrayData.push(this.titres.libMarieConjointDcdOui);
    }
  }
  private createCouple(): void {
    const couple = (this.forms.couple.toLowerCase() === 'oui') ? this.titres.libMarieMomentDecesOui : this.titres.libMarieMomentDecesNon;
    this.arrayData.push(couple);
  }
  public getData(): Array<string> {
    return this.arrayData;
  }

}
