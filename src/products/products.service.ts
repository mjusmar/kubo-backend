import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Products } from './entities/products.entity';

import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './entities/orders.entity';
import { Ordprod } from './entities/ordprod.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productsRepo: Repository<Products>,
    @InjectRepository(Orders) private ordersRepo: Repository<Orders>,
    @InjectRepository(Ordprod) private ordprodRepo: Repository<Ordprod>,
  ){}

  async create(data: CreateOrderDto) {
    try{
      let {ord_id} = await this.ordersRepo.save({ord_total: data.ord_total});

      Promise.all( data.prodArray.map( async (element: any) => {
        return await this.ordprodRepo.save({ord_id: ord_id, prd_id: element.prd_id});
      }))
      
      return {status: 'success'}
    }
    catch(error){
      return {status: "error"};
    }
  }

  async findAll() {
    try{
      let products = await this.productsRepo.find();
      return  {status: "success", data: products};
    }
    catch(error){
      return {status: "error"};
    }
  }

  //Función para agregar los datos de la página en la BD

  async insertAll() {
    try{

      let allProducts = [
        {
          prd_categ: 'technology',
          prd_img : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
          prd_name : 'iPhone X',
          prd_price : '300',
          prd_descr : 'Lleva a casa fácil y rápido. Encuentra la mejor garantía.'
        },
        {
          prd_categ: 'technology',
          prd_img : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
          prd_name : 'iPhone Plus',
          prd_price : '366',
          prd_descr : 'Lleva a casa fácil y rápido. Encuentra la mejor garantía.'
        },
        {
          prd_categ: 'technology',
          prd_img : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
          prd_name : 'iPhone 12',
          prd_price : '400',
          prd_descr : 'Lleva a casa fácil y rápido. Encuentra la mejor garantía.'
        },
        {
          prd_categ: 'technology',
          prd_img : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
          prd_name : 'iPhone 12 Plus',
          prd_price : '500',
          prd_descr : 'Lleva a casa fácil y rápido. Encuentra la mejor garantía.'
        },
        {
          prd_categ: 'technology',
          prd_img : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
          prd_name : 'iPhone 13',
          prd_price : '600',
          prd_descr : 'Lleva a casa fácil y rápido. Encuentra la mejor garantía.'
        },
        {
          prd_categ: 'food',
          prd_img : "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80",
          prd_name : 'Fresa',
          prd_price : '11',
          prd_descr : 'Productos mejor seleccionados y de excelente calidad.'
        },
        {
          prd_categ: 'food',
          prd_img : "https://images.unsplash.com/photo-1572859704906-ab0716da285f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
          prd_name : 'Piña',
          prd_price : '6',
          prd_descr : 'Productos mejor seleccionados y de excelente calidad.'
        },
        {
          prd_categ: 'food',
          prd_img : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          prd_name : 'Mango',
          prd_price : '10',
          prd_descr : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
        },
        {
          prd_categ: 'home',
          prd_img : "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
          prd_name : 'Escritorio',
          prd_price : '354',
          prd_descr : 'Somos tu mejor elección para productos del hogar'
        },
        {
          prd_categ: 'home',
          prd_img : "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          prd_name : 'Cama',
          prd_price : '500',
          prd_descr : 'Somos tu mejor elección para productos del hogar'
        },
        {
          prd_categ: 'technology',
          prd_img : "https://images.unsplash.com/photo-1623839627668-0b0a573d5ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          prd_name : 'Televisor',
          prd_price : '60',
          prd_descr : 'Smart tv perfecto para ti'
        },
        {
          prd_categ: 'home',
          prd_img : "https://images.unsplash.com/photo-1592991694176-3878d223a0f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
          prd_name : 'Mesa',
          prd_price : '50',
          prd_descr : 'Somos tu mejor elección para productos del hogar'
        }
      ]

      await Promise.all(
        allProducts.map ( async (element:any) => {
          return await this.productsRepo.save(element);
        })
      ); 

      return {status: 'success'};
    }
    catch(error){
      return {status: 'error'};
    }
  }
}
