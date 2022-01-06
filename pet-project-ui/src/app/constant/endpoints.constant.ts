export class Endpoints {

  static readonly CLIENT = '/api/clients';
  static readonly CLIENT_DETAIL = (id: number) => `${ Endpoints.CLIENT }/${ id }`
}
