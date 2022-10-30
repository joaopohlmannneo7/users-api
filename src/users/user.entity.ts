import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserAlreadyExist } from "./is-user-already-exists.validator";


export class User {
 
    id: number;
    @IsNotEmpty({
        message: 'login is required'
    })
    @IsString({
        message: 'login need to be a string'
    })

   @IsUserAlreadyExist({

   })
    login: string;
    @IsEmail({
        message: 'email need to be valid'
    })
    email: string;
    address: string;

    @IsNotEmpty({
        message: 'password is required'
    })
    @Exclude({
        // To plain only = vier dado bruto
        toPlainOnly: true,
    })
    password: string;
    @IsNotEmpty({
        message: 'fullName is required'
    })
    @Expose({
        name: 'name',
        toPlainOnly: true,
    })
    fullName?: string;
    // ?: = parâmetro opcional
    // address: Address;
    createdDate: Date;

    
}

// export class UserDTO{
// // Data trasfer Object

// }
// interface Imposto {
//     calcular(str: string): number;
// }

// class ICMS implements Imposto{
//     calcular(str: string): number {
//        return 1;
//     }
    
    
// }

// {
//     senha: '123456',
//     address: {
//         rua: 'flunao de tal',
//         numero: '12'
//     }
// }