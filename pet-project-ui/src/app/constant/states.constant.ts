export class States {

  static readonly CLIENTS = 'clients';
  static readonly CLIENTS_VIEW = (id: number) => `${ States.CLIENTS }/${ id }`
}
