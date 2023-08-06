import { PartialType } from "@nestjs/mapped-types";

export class createEventsDto {
  name: string;
  description: string;
  when: string;
  address: string;
}
 
export class updatedEventsDto  extends PartialType(createEventsDto)
