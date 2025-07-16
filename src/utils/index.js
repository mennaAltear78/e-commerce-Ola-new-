import { createStandaloneToast } from "@chakra-ui/react"

const {toast}=createStandaloneToast()

export const AddItemToCart =(cartItem={},shoppingCartItem=[])=>{
const existsItem=shoppingCartItem.find((item)=>item.id===cartItem.id)
if(existsItem){
    toast({
       
        description:`it has been added to your cart`,
        status:'success',
        duration:5000,
        isClosable:true,
        // position:'bottom-right',
        mb:'900px'
      })
      console.log("yes", JSON.parse(JSON.stringify(shoppingCartItem)))
      
    return shoppingCartItem.map(item=>
       item.id===cartItem.id ? {...item , quantity: item.quantity+1}:item  
    )
}
else{
    toast({
        description:`added to your cart`,
        status:'success',
        duration:5000,
        isClosable:true,
        mb:'900px'
      })

      console.log("no", JSON.parse(JSON.stringify([...shoppingCartItem, { ...cartItem, quantity: 1 }])))
      
    return[...shoppingCartItem,{...cartItem,quantity:1}]
}
}