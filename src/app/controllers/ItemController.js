
import * as Yup from 'yup'
import Item from '../schema/Item'

class ItemController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            quantity: Yup.string().required(),
            expirationAt: Yup.string().required(),

        })
      
        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }
        const { name, type, quantity, expirationAt } = request.body;
        try {
            const newItem = await Item.create({
              name,
              type,
              quantity,
              expirationAt,
            });
      
            return response.json(newItem);
          } catch (error) {
            return response.status(500).json({ error: 'Error when creating a new item.' });
          }

          
    }

    async index(request, response) {
      const searchItems = await Item.find()

      return response.json(searchItems)
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
     
      await Item.findByIdAndDelete(id);

      return res.send('Item excluído com sucesso.');
    } catch (err) {
      console.log(err);
      return res.status(500).send('Erro ao excluir item.');
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const { name, type, quantity, expirationAt } = req.body;

    try {
      // Conecte-se ao banco de dados e execute a atualização do item com base no ID
      const updatedItem = await Item.findByIdAndUpdate(
        id,
        { name, type, quantity, expirationAt },
        { new: true }
      );

      return res.json(updatedItem);
    } catch (err) {
      console.log(err);
      return res.status(500).send('Erro ao atualizar item.');
    }
  }
}

export default new ItemController()
