import {EDoors} from "../const/EDoors.ts";

export const doors: Record<EDoors, boolean> = {
    [EDoors.DriverFront]: false,
    [EDoors.PassengerFront]: false,
    [EDoors.DriverRear]: false,
    [EDoors.PassengerRear]: false,
    [EDoors.Hood]: true,
    [EDoors.Trunk]: true,
}