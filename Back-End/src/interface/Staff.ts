// This code exports an interface named "Staff"
export interface Staff {
    // "id" is an optional property that represents the staff member's ID
    id?: number;
    // "numeroIdentidad" is a required property that represents the staff member's identification number
    numeroIdentidad: number;
    // "nombre" is a required property that represents the staff member's first name
    nombre: string;
    // "apellidos" is a required property that represents the staff member's last name
    apellidos: string;
    // "img" is a required property that represents the staff member's profile picture
    img: string;
    // "celular" is a required property that represents the staff member's phone number
    celular: string;
    // "direccion" is a required property that represents the staff member's address
    direccion: string;
    // "grupoSanguineo" is a required property that represents the staff member's blood group
    grupoSanguineo: string;
    // "nombreAcudiente" is a required property that represents the name of the staff member's guardian
    nombreAcudiente: string;
    // "contactoAcudiente" is a required property that represents the phone number of the staff member's guardian
    contactoAcudiente: string;
    // "area" is a required property that represents the staff member's department
    area: string;
    // "fechaNacimiento" is a required property that represents the staff member's date of birth
    fechaNacimiento: string;
    // "created_at" is a required property that represents the timestamp of when the staff member's record was created
    created_at: Date;
}


/*Template for checking

{
   "numeroIdentidad": 456789516,
   "nombre": "Mateo",
   "apellidos": "Giraldo Arboleda",
   "celular": "My number",
   "direccion": "My house",
   "grupoSanguineo": "A+",
   "nombreAcudiente": "Luz Esperanza Arboleda Cano",
   "area": "Gestion de Talento Humano",
   "fechaNacimiento": "04/06/2003" 
}

*/