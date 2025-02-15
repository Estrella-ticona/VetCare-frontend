export class Category {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    stock: number | undefined;

    constructor(data: Partial<Category> = {}) {
        Object.assign(this, data);
    }
}