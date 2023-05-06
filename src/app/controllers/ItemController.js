
import * as Yup from 'yup'
import Item from '../schema/Item'

class ItemController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            quantity: Yup.string().required(),
            expirationAT: Yup.string(),

        })
      
        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }
        const { name, type, quantity, expirationAT } = request.body;
        try {
            const newItem = await Item.create({
              name,
              type,
              quantity,
              expirationAT,
            });
      
            return response.json(newItem);
          } catch (error) {
            return response.status(500).json({ error: 'Error when creating a new item.' });
          }
    }
}

export default new ItemController()
