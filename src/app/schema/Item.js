import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema({
       
    
    
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
            expirationAt:{
                type: String,
                required: true,
                
            }
        },
{
    timestamps:true,
}
)

export default mongoose.model('Item', ItemSchema)
