import { HouseDto } from "./house-dto";

export interface HouseRankingDto {
    rankings: HouseDto[];
    winner: HouseDto;
}