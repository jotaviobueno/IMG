import UserDTO from '../../DTO/Response/UserDTO.js';

class ShowProfileUseCase {

    async execute(user) {
        return { status: 200, message: { user: UserDTO(user) }};
    }

}

export default ShowProfileUseCase