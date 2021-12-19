import { UserDto } from "../../api/users/user/model/dto/user.dto";

export interface AuthorizedRequest {
    user: Partial<UserDto>;
}
