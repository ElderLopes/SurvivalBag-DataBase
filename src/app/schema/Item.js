import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema({
       
      
    itens: [
        {
    
            name: {
                type: String,
               
            },
            type: {
                type: String,
                
            },
            quantity:{
                type: Number,
                required: true,
            },
            expirationAT:{
                type: String,
                
            }
        },
    ],
},
{
    timestamps:true,
}
)

export default mongoose.model('Item', ItemSchema)
