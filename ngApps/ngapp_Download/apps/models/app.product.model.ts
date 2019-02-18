export class Product {
    constructor(
        public _id: string,
        public ProductId: number,
        public ProductName: string,
        public CategoryName: string,
        public manufacturer: string,
        public Price: number,
        public searchContent: string,
        public checkProdName: boolean,
        public checkCatName: boolean,
        public checkMan: boolean
    ) {

    }
}