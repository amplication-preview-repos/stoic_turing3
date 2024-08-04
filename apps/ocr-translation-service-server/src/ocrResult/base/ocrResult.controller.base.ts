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
import { OcrResultService } from "../ocrResult.service";
import { OcrResultCreateInput } from "./OcrResultCreateInput";
import { OcrResult } from "./OcrResult";
import { OcrResultFindManyArgs } from "./OcrResultFindManyArgs";
import { OcrResultWhereUniqueInput } from "./OcrResultWhereUniqueInput";
import { OcrResultUpdateInput } from "./OcrResultUpdateInput";
import { TranslationFindManyArgs } from "../../translation/base/TranslationFindManyArgs";
import { Translation } from "../../translation/base/Translation";
import { TranslationWhereUniqueInput } from "../../translation/base/TranslationWhereUniqueInput";

export class OcrResultControllerBase {
  constructor(protected readonly service: OcrResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OcrResult })
  async createOcrResult(
    @common.Body() data: OcrResultCreateInput
  ): Promise<OcrResult> {
    return await this.service.createOcrResult({
      data: {
        ...data,

        pdfFile: data.pdfFile
          ? {
              connect: data.pdfFile,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        extractionTime: true,
        id: true,

        pdfFile: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OcrResult] })
  @ApiNestedQuery(OcrResultFindManyArgs)
  async ocrResults(@common.Req() request: Request): Promise<OcrResult[]> {
    const args = plainToClass(OcrResultFindManyArgs, request.query);
    return this.service.ocrResults({
      ...args,
      select: {
        createdAt: true,
        extractionTime: true,
        id: true,

        pdfFile: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OcrResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ocrResult(
    @common.Param() params: OcrResultWhereUniqueInput
  ): Promise<OcrResult | null> {
    const result = await this.service.ocrResult({
      where: params,
      select: {
        createdAt: true,
        extractionTime: true,
        id: true,

        pdfFile: {
          select: {
            id: true,
          },
        },

        text: true,
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
  @swagger.ApiOkResponse({ type: OcrResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOcrResult(
    @common.Param() params: OcrResultWhereUniqueInput,
    @common.Body() data: OcrResultUpdateInput
  ): Promise<OcrResult | null> {
    try {
      return await this.service.updateOcrResult({
        where: params,
        data: {
          ...data,

          pdfFile: data.pdfFile
            ? {
                connect: data.pdfFile,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          extractionTime: true,
          id: true,

          pdfFile: {
            select: {
              id: true,
            },
          },

          text: true,
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
  @swagger.ApiOkResponse({ type: OcrResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOcrResult(
    @common.Param() params: OcrResultWhereUniqueInput
  ): Promise<OcrResult | null> {
    try {
      return await this.service.deleteOcrResult({
        where: params,
        select: {
          createdAt: true,
          extractionTime: true,
          id: true,

          pdfFile: {
            select: {
              id: true,
            },
          },

          text: true,
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

  @common.Get("/:id/translations")
  @ApiNestedQuery(TranslationFindManyArgs)
  async findTranslations(
    @common.Req() request: Request,
    @common.Param() params: OcrResultWhereUniqueInput
  ): Promise<Translation[]> {
    const query = plainToClass(TranslationFindManyArgs, request.query);
    const results = await this.service.findTranslations(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        ocrResult: {
          select: {
            id: true,
          },
        },

        translatedText: true,
        translationTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/translations")
  async connectTranslations(
    @common.Param() params: OcrResultWhereUniqueInput,
    @common.Body() body: TranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translations: {
        connect: body,
      },
    };
    await this.service.updateOcrResult({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/translations")
  async updateTranslations(
    @common.Param() params: OcrResultWhereUniqueInput,
    @common.Body() body: TranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translations: {
        set: body,
      },
    };
    await this.service.updateOcrResult({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/translations")
  async disconnectTranslations(
    @common.Param() params: OcrResultWhereUniqueInput,
    @common.Body() body: TranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translations: {
        disconnect: body,
      },
    };
    await this.service.updateOcrResult({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/process-ocr")
  @swagger.ApiOkResponse({
    type: OcrResultCreateInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ProcessOcr(
    @common.Body()
    body: OcrResultCreateInput
  ): Promise<OcrResultCreateInput> {
    return this.service.ProcessOcr(body);
  }
}
