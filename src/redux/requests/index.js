import { PRODUCTS_API } from '../../utils/Constants';

export async function getProducts() {
    try {
        const res = await fetch(PRODUCTS_API);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export async function getSingleProductById(id) {
    try {
        const res = await fetch(PRODUCTS_API+`/${id}`);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}
