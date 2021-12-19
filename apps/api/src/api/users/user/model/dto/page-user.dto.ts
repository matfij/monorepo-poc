import { ApiProperty } from "@nestjs/swagger";
import { PaginationBaseDto } from "apps/api/src/common/definitions/pagination";
import { IsArray } from "class-validator";
import { UserDto } from "./user.dto";

export class PageUserDto extends PaginationBaseDto {

    @IsArray()
    @ApiProperty({ type: [UserDto] })
    data: UserDto[];
}
