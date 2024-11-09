import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Res, } from "@nestjs/common";
import {UserService } from "../services/user.service";
import { Repository } from "typeorm";
import { UserEntity } from "../models/User";
import { ClientService } from "src/services/client.service";
import { Client } from "src/models/Client";
import { UserRes } from "src/models/dto/UserRes";
import { TaiKhoanNganHangService } from "src/services/taiKhoanNganHang.service";
import { TaiKhoanNganHangRes } from "src/models/dto/TaiKhoanNganHang/TaiKhoanNganHangReq";

@Controller('api/tai-khoan-ngan-hang')
export class TaiKhoanNganHangController{
    constructor(
        private taiKhoanNganHangService:TaiKhoanNganHangService
    ){}
    @Get()
    async findAll(){
        const response = await this.taiKhoanNganHangService.findAll()
        return response
    }
    @Post()
    async findAllWithPagination(@Body() taiKhoanNganHangRes:TaiKhoanNganHangRes){
        let page = taiKhoanNganHangRes.Page
        let limit = taiKhoanNganHangRes.Limit
        console.log(`page ${page}`)
        console.log(`limit ${limit}`)
        const resp = await this.taiKhoanNganHangService.findAllWithPagination(page, limit)
        return resp;
    }
    // @Get(":id")
    // async findById(@Param() id:number){
    //     const response = await this.userService.findOne(id)
    //     return response
    // }
    // @Post()
    // async create(@Body() createUserDTO:UserEntity){
    //     const response = await this.userService.createUser(createUserDTO);
    //     return response
    // }
}