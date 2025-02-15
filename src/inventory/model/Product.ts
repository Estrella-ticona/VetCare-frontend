export class Product {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    price: number | undefined;
    stock: number | undefined;
    categoryId: number | undefined;

    constructor(data: Partial<Product> = {}) {
        Object.assign(this, data);
    }
}