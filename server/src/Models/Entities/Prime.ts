import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Prime extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'integer' })
	number: number

	@Column({ type: 'integer' })
	sum: number

	@Column({ type: 'integer' })
	mod: number

	@Column({ type: 'integer' })
	prod: number
}
