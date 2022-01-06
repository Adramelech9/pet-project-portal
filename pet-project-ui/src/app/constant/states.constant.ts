export class States {

  static readonly CLIENTS = 'client-component';
  static readonly CLIENTS_VIEW = (id: number) => `${ States.CLIENTS }/${ id }`
}
