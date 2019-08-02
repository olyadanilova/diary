import {Entity, Column} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Diary{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    note: string;

    @Column('date')
    date: Date;

    @Column('boolean', { nullable: true })
    rowReady?: boolean;
}