/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CursoService } from "../curso.service";
import { CursoCreateInput } from "./CursoCreateInput";
import { Curso } from "./Curso";
import { CursoFindManyArgs } from "./CursoFindManyArgs";
import { CursoWhereUniqueInput } from "./CursoWhereUniqueInput";
import { CursoUpdateInput } from "./CursoUpdateInput";

export class CursoControllerBase {
  constructor(protected readonly service: CursoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Curso })
  async createCurso(@common.Body() data: CursoCreateInput): Promise<Curso> {
    return await this.service.createCurso({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Curso] })
  @ApiNestedQuery(CursoFindManyArgs)
  async cursos(@common.Req() request: Request): Promise<Curso[]> {
    const args = plainToClass(CursoFindManyArgs, request.query);
    return this.service.cursos({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Curso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async curso(
    @common.Param() params: CursoWhereUniqueInput
  ): Promise<Curso | null> {
    const result = await this.service.curso({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Curso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCurso(
    @common.Param() params: CursoWhereUniqueInput,
    @common.Body() data: CursoUpdateInput
  ): Promise<Curso | null> {
    try {
      return await this.service.updateCurso({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Curso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCurso(
    @common.Param() params: CursoWhereUniqueInput
  ): Promise<Curso | null> {
    try {
      return await this.service.deleteCurso({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}