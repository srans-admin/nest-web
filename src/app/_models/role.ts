export class Role{
    id:number;
    firstname:string;
    lastname:string;
    mobile:number;
    email:string;
    role:string;
    token?: string;
    User = 'User';
    Admin = 'Admin';
  static User: any;
  static Admin: any;
  static superadmin: any;
  static admin: string;
  static user: string;
}