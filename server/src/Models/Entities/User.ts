import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar' })
	name: string
}
