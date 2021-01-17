export class DestinationCategory {
  id?: number;
  name?: string;
  description?: string;
  status?:
    | 'NEW'
    | 'DRAFT'
    | 'DUPLICATE'
    | 'VERIFIED'
    | 'APPROVED'
    | 'ACTIVE'
    | 'INCOMPLETE'
    | 'DISABLED'
    | 'ARCHIVED';

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = 'DRAFT';
  }
}
