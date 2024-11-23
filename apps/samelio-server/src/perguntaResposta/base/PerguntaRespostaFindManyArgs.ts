/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PerguntaRespostaWhereInput } from "./PerguntaRespostaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PerguntaRespostaOrderByInput } from "./PerguntaRespostaOrderByInput";

@ArgsType()
class PerguntaRespostaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PerguntaRespostaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PerguntaRespostaWhereInput, { nullable: true })
  @Type(() => PerguntaRespostaWhereInput)
  where?: PerguntaRespostaWhereInput;

  @ApiProperty({
    required: false,
    type: [PerguntaRespostaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PerguntaRespostaOrderByInput], { nullable: true })
  @Type(() => PerguntaRespostaOrderByInput)
  orderBy?: Array<PerguntaRespostaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PerguntaRespostaFindManyArgs as PerguntaRespostaFindManyArgs };
