import { Field } from "payload";
import Padding from "../../Padding";

const StandardHero: Field = {
  name: 'standardHero',
  type: 'group',
  fields: [
    Padding,
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default StandardHero;