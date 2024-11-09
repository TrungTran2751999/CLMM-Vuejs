import { Module } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../models/User";
import { UserController } from "../controllers/user.controller";
import { Address } from "src/models/address";
import { AdressService } from "src/services/address.service";
import { ClientService } from "src/services/client.service";
import { Client } from "src/models/Client";
import { JwtService } from "@nestjs/jwt";
import { TaiKhoanNganHang } from "src/models/TaiKhoanNganHang";
import { TaiKhoanNganHangController } from "src/controllers/taiKhoanNganHang.controller";
import { TaiKhoanNganHangService } from "src/services/taiKhoanNganHang.service";

@Module({
    imports:[TypeOrmModule.forFeature([TaiKhoanNganHang])],
    controllers:[TaiKhoanNganHangController],
    providers:[TaiKhoanNganHangService],
})
export class TaiKhoanNganHangModule{}