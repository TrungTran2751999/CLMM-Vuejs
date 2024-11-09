import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "src/models/address";
import { LichSuChoi } from "src/models/LichSuChoi";
import { TaiKhoanNganHang } from "src/models/TaiKhoanNganHang";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class TaiKhoanNganHangService{
    constructor(
        @InjectRepository(TaiKhoanNganHang)
        private addressRepository:Repository<TaiKhoanNganHang>,

        private entityManager:EntityManager
    ){}
    findAll(){
        return this.addressRepository.find();
    }
    findAllWithPagination(page:number, limit:number):Promise<TaiKhoanNganHang>{
        let query = `SELECT * FROM tai_khoan_ngan_hang LIMIT ? OFFSET ?`
        return this.entityManager.query(query, [page, limit]);
    }
}