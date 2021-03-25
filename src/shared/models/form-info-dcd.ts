export class FormInfoDcd {
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
    this.createAffliation();
  }
  private createDate(): void {
    const dateDcd = `${this.titres.libdtdc} ${this.forms.jour}/${this.forms.mois}/${this.forms.annee}`;
    this.arrayData.push(dateDcd);
  }
  private createAffliation(): void {
    const affilation = (this.forms.affilation.toLowerCase() === 'oui') ?  this.titres.libaffilrgo : this.titres.libaffilrgn;
    this.arrayData.push(affilation);
  }
  public getData(): Array<string> {
    return this.arrayData;
  }
}
