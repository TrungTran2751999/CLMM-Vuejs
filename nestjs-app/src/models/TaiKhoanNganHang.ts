import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity({name: "tai_khoan_ngan_hang"})
export class TaiKhoanNganHang{
    @PrimaryGeneratedColumn()
    Id?:number;

    @Column({name:"MaQR"})
    MaQR?:string;

    @Column({name:"TenNguoiNhan"})
    TenNguoiNhan?:string;

    @Column({name:"NganHang"})
    NganHang?:number;

    @Column({name:"Status"})
    Status?:number;

    @Column({name:"CreatedAt"})
    CreatedAt?:Date

    @Column({name:"UpdatedAt"})
    UpdatedAt?:Date

    // @OneToOne(()=>Address)
    // @JoinColumn({name:"address_id"})
    // address:Address
}