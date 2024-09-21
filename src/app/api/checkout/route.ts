import { ProductType } from './../../../../type';
import { NextResponse } from "next/server";
import Stripe from "stripe";


export const POST =async(request:NextResponse) =>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    try {
        const reqBody = await request.json();
    const {email, item} =await reqBody;
    const extractingItems = await item.map((items:ProductType) => ({
        quantity: items.quantity,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(items.price * 100),
          product_data: {
            name: items.title,
            description: items.description,
            images: items.images,
          },
        },
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: extractingItems,
        mode: "payment",
        success_url: `${process.env.NEXTAUTH_URL}/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
        metadata: {
          email,
        },
      });
      console.log('session',session);
      

    return NextResponse.json({
        succes:true,
        message:"server connected",
        id:session.id
    })
        
    } catch (error) {
        console.log("err", error)
        
    }
}