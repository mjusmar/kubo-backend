import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryColumn()
    prd_id      : string;

    @Column()
    prd_name    : string;

	@Column()
    prd_price   : number;
    
    @Column()
    prd_categ   : string;
	
    @Column()
    prd_descr   : string;
    
    @Column()
    prd_img     : string;
    
}
