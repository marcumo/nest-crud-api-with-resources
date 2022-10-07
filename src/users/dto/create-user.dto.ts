import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty ()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    
    @ApiProperty()
    @IsPhoneNumber()
    readonly celphone: string;
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}
