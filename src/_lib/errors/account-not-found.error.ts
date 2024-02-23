import { HttpStatus, NotFoundException } from "@nestjs/common";
import { ErrorCode, ErrorMessages } from "../constants/error";
import { CustomErrorInterface } from "../types/CustomErrorInterface.interface";

export const ACCOUNT_NOT_FOUND_ERROR: CustomErrorInterface = {
    status: HttpStatus.NOT_FOUND,
    code: ErrorCode.ACCOUNT_NOT_FOUND,
    message: ErrorMessages.ACCOUNT_NOT_FOUND
}



export class AccountNotFound extends NotFoundException {
    constructor() {
        super(ACCOUNT_NOT_FOUND_ERROR, AccountNotFound.name);
        Object.setPrototypeOf(this, AccountNotFound.prototype);
    }
}