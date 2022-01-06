export class Endpoints {

  static readonly BASEURL = '/api/clients';
  static readonly CLIENT_DETAIL = (id: number) => `${ Endpoints.BASEURL }/${ id }`
}
