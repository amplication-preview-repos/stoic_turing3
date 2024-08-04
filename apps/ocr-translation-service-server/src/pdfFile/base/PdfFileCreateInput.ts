/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { OcrResultCreateNestedManyWithoutPdfFilesInput } from "./OcrResultCreateNestedManyWithoutPdfFilesInput";
import { Type } from "class-transformer";

@InputType()
class PdfFileCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filePath?: string | null;

  @ApiProperty({
    required: false,
    type: () => OcrResultCreateNestedManyWithoutPdfFilesInput,
  })
  @ValidateNested()
  @Type(() => OcrResultCreateNestedManyWithoutPdfFilesInput)
  @IsOptional()
  @Field(() => OcrResultCreateNestedManyWithoutPdfFilesInput, {
    nullable: true,
  })
  ocrResults?: OcrResultCreateNestedManyWithoutPdfFilesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  uploadTime?: Date | null;
}

export { PdfFileCreateInput as PdfFileCreateInput };
