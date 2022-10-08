import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_product")
export class Ordprod {
    @PrimaryColumn()
    oxp_id: string;

    @Column()
    ord_id: string;
    
    @Column()
    prd_id: string;
}
