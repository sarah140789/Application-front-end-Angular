/**
 * Name : ConfInterface
 * Comment: L'interface representant la structure des donnees pour l'api Conf
 */
export interface ConfInterface {
  /**
   *  LIBELLE_SERVICE : string : Le nom du libellé : obtenir_mon_age_de_depart_a_la_retraite
   */
  LIBELLE_SERVICE: string;
  /**
   *  urlCms : string : l'url du portail du PUB
   */
  urlCms: string;
  /**
   * URL_AT_INTERNET : string : l'url pour faire la statistisation du site nombre de clique, d'impresssion, de téléchargement ...
   */
  URL_AT_INTERNET: string;
  /**
   * urlErreurTechnique : string : l'url d'erreur du PUB en cas de problème
   */
  urlErreurTechnique: string;
}
