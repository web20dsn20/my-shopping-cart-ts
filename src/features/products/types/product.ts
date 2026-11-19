export interface Product {
    id:number;
    title:string;
    price:number;
    image:string;
}
export const products: Product[]=[{
    id:1,
    title:"Wireless headphones",
    price:100,
    image:"https://via.placeholder.com/150"
}, {
    id:2,
    title:"Wired headphones",
    price:50,
    image:"https://via.placeholder.com/150"
}, {
    id:3,
    title:"Wireless mouse",
    price:30,
    image:"https://via.placeholder.com/150"
}]