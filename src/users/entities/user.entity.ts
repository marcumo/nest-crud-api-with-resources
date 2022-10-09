import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column({ length: 500 })
    lastName: string;
  
    @Column({ length: 500 })
    celphone: string;
  
    @Column({ length: 500 })
    email: string;

}
