import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from "./dto/create-item.dto"
import { ItemsService } from "./items.service"
import { Item } from "./interfaces/item.interface"


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    //USING WITH MONGODB DATABASE
    @Get()
    async findAll(): Promise<Item[]> {
       return this.itemsService.findAll();
    }

    //testing with out data
    // @Get()
    // findAll(): string  {
    //    return "get all"
    // }

    //testing with hardcoded data from the service
    // @Get()
    // findAll(): Item[] {
    //    return this.itemsService.findAll();
    // }

    //testing with out data
    // @Get(':id')
    // findOne(@Param('id') id): string {
    //     return `item ${id}`;
    // }

        //USING WITH MONGODB DATABASE
     @Get(':id')
    findOne(@Param('id') id): Promise<Item | null > {
        return this.itemsService.findOne(id);
    }
    
        //testing with hardcoded data from the service
    //  @Get(':id')
    // findOne(@Param('id') id): Item | undefined {
    //     return this.itemsService.findOne(id);
    // }
    
    //USING WITH MONGODB DATABASE
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto)
    }

    //testing with out data
        //    @Post()
        //     create(): string {
        //         return `create all`
        //     }

        //testing with hardcoded data from the service
    // @Post()
    // create(@Body() createItemDto: CreateItemDto): string {
    //     return `Name: ${createItemDto.name} Description: ${createItemDto. description}`
    // }

            @Delete(':id')
        async delete(@Param('id') id: string): Promise<{ message: string }> {
        const deleted = await this.itemsService.delete(id);
        
        if (!deleted) {
            throw new NotFoundException(`Item with id ${id} not found`);
        }

        return { message: `Item deleted: ${id}` };
        }

    // @Delete(":id")
    // delete(@Param("id") id): Promise<Item | null> {
    //         const deleted = this.itemsService.delete(id)
    //         return  deleted
    // }


        //testing with hardcoded data from the service
    // @Delete(":id")
    // delete(@Param("id") id): string {
    //     return `delete ${id}`
    // }


    @Put(":id")
    update(@Body() updateItemDto: CreateItemDto, @Param("id") id): Promise<Item | null> {
        return this.itemsService.update(id, updateItemDto)
    }

    //testing with hardcoded data from the service
    // @Put(":id")
    // update(@Body() updateItemDto: CreateItemDto, @Param("id") id): string {
    //     return `update ${id} - Name: ${updateItemDto.name}`
    // }
}

