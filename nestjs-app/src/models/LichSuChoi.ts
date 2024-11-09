import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "lich_su_choi"})
export class LichSuChoi{
    @PrimaryGeneratedColumn()
    Id?:number;

    @Column({name:"IdUser"})
    IdUser?:number;

    @Column({name:"MaGD"})
    MaGD?:string;

    @Column({name:"TienCuoc"})
    TienCuoc?:number;

    @Column({name:"NoiDung"})
    NoiDung?:string;

    @Column({name:"KetQua"})
    KetQua?:boolean

    @Column({name:"CreatedAt"})
    CreatedAt?:Date

    // @OneToOne(()=>Address)
    // @JoinColumn({name:"address_id"})
    // address:Address
}