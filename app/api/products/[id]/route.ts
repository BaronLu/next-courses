import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import ProductList from '../route';



interface Props{
    params :{
        id: string
    }
}


export async function PUT(request: NextRequest, { params: { id } }: Props) {
    //get the request body
    const body = await request.json();
    
    //validate the request body
    const validation = schema.safeParse(body);
    if(!validation.success){
        console.error('Validation errors:', validation.error.errors);
        return NextResponse.json({ message: "Invalid data" },{status:400});
    }

  if(parseInt(id) > 10){
      return NextResponse.json({ message: "Not right!" },{status:404});
  }

    //find the product and update it
    const productIndex = ProductList.findIndex((product) => product.id === id);
    if(productIndex !== -1){
        ProductList[productIndex] = { ...ProductList[productIndex], ...body };
    } else {
        return NextResponse.json({ message: "Product not found" },{status:404});
    }

    return NextResponse.json(ProductList[productIndex]);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    const productIndex = ProductList.findIndex((product) => product.id === id);
    if(productIndex !== -1){
        ProductList.splice(productIndex, 1);
    } else {
        return NextResponse.json({ message: "Product not found" },{status:404});
    }

    return NextResponse.json({ message: "Product deleted" });
}

//create a new product
export async function POST(request: NextRequest) {
    //get the request body
    const body = await request.json();
    
    //validate the request body
    const validation = schema.safeParse(body);
    if(!validation.success){
        console.error('Validation errors:', validation.error.errors);
        return NextResponse.json({ message: "Invalid data" },{status:400});
    }

    //generate a new id
    const id = (ProductList.length + 1).toString();
    const newProduct = { id, ...body };
    ProductList.push(newProduct);

    return NextResponse.json(newProduct);
}