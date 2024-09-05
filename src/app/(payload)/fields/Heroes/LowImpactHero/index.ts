import { Field } from "payload";
import Padding from "../../Padding";

const LowImpactHero: Field = {
    name: 'lowImpactHero',
    type: 'group',
    fields: [
        Padding,
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            required: true,
        },
    ]
}

export default LowImpactHero;