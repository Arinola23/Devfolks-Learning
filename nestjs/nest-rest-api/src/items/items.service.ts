import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>) {}
    
     findAll(): Promise<Item[]> {
        return this.itemModel.find();
    }

    async findOne(id: string): Promise<Item | null> {
       return await this.itemModel.findOne({_id: id});
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item)
            return await newItem.save()
    }

    async update(id: string, item: Item): Promise<Item | null> {
         return await this.itemModel.findByIdAndUpdate(id, item, {new: true})
    }

    async delete(id: string): Promise<Item | null> {
        return await this.itemModel.findByIdAndDelete(id)
    }
//         OR THIS 
//     async findOne(id: string): Promise<Item> {
//   const item = await this.itemModel.findOne({ _id: id }).lean(); // <-- plain object
//   if (!item) {
//     throw new NotFoundException(`Item with id ${id} not found`);
//   }
//   return item;
// }
     
    //hardcorded data to test the service, it is supposed to be mongodb
    // private readonly items: Item[] = [
    //     {
    //         id: "12345678",
    //         name: "yomi",
    //         qty: 100,
    //         description: "this is little"
    //     },
    //     {
    //         id: "12366779",
    //         name: "jide",
    //         qty: 5000,
    //         description: "this is a lot"
    //     }
    // ];

    // findAll(): Item[] {
    //     return this.items;
    // }

    // findOne(id: string): Item | undefined {
    //    return  this.items.find(item => item.id === id);
    // }
            //OR to handle the undefined error on return like this instance 
            //  // findOne(id: string): Item {
    //    return  this.items.find(item => item.id === id);
    // }
    // findOne(id: string): Item {
    //     const item = this.items.find(item => item.id === id)
    //     if(!item) {
    //         throw new NotFoundException(`item with id ${id} not found`)
    //     }
    //     return item;
    // }



} 
