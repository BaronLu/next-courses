import { NextRequest, NextResponse } from 'next/server';


const ProductList = [
    { 'id': '1', 'name': 'Milk', 'price' : 2.5 },
    { 'id': '2', 'name': 'Bread', 'price' : 1.5 },
    { 'id': '3', 'name': 'Butter', 'price' : 3.5 },
]



export function GET(request: NextRequest) {
  return NextResponse.json(ProductList);
}

//导出productList
export default ProductList;