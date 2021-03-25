import { User } from '../Models/Entities/User'

export default class UserRepository {
	public create(userName: string): User {
		const user: User = new User

		user.name = userName
		user.save()

		return user
	}
}
