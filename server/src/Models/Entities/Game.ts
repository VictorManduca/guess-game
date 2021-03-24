import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'

import { User } from './User'

@Entity()
export class Game extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@OneToOne(() => User)
	@JoinColumn()
	user: User

	@Column({ type: 'integer' })
	time: number

	@Column({ type: 'integer' })
	guesses: number

	@Column({ type: 'integer' })
	number: number
}
