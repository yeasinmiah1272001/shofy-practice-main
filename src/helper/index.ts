// @ts-ignore
export const getData = async(endPoint) =>{
    const response = await fetch(endPoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
    });
    
    const product = await response.json(); 
    return product

    // `https://dummyjson.com/products`
}