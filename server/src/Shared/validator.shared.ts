import { User } from '../Models/Entities/User'

export function isFieldsValid(payload: { name: string, time: number, guesses: number, number: number }): boolean {
	if (!payload.name || !payload.time || !payload.guesses || !payload.number) {
		return false
	} else {
		return true
	}
}

export async function isUserRegistered(name: string): Promise<User | null> {
	const user = await User.findOne({ name: name })

	if (user) {
		return user
	} else {
		return null
	}
}
