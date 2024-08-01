// src/services/BaseDbService.ts
import { PrismaClient, Prisma } from '@prisma/client';

export default class BaseDbService<T extends Prisma.ModelName> {
  protected prisma: PrismaClient;

  constructor(model: T) {
    this.prisma = new PrismaClient();
    this.model = model;
  }

  private model: T;

  async create(data: any) {
    return await this.prisma[this.model].create({
      data,
    });
  }

  async findUnique(params: any) {
    
    return await this.prisma[this.model].findUnique(params);
  }

  async findMany(params?:any) {
    if(params)
    return await this.prisma[this.model].findMany(params);

    return await this.prisma[this.model].findMany();

  }

  async update(params: any) {
    return await this.prisma[this.model].update(params);
  }

  async delete(params: any) {
    return await this.prisma[this.model].delete(params);
  }
}
