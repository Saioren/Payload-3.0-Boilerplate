import { Field } from 'payload';
import StandardHero from './StandardHero';
import LowImpactHero from './LowImpactHero';

export const Hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      label: 'Hero Type',
      type: 'select',
      required: true,
      defaultValue: 'standard',
      options: [
        {
          label: 'Standard',
          value: 'standard',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        // Add more hero types here as needed
      ],
    },
    {
      name: 'standard',
      type: 'group',
      label: '',
      admin: {
        condition: (_, { type }) => type === 'standard',
      },
      fields: [
        StandardHero,
      ]
    },
    {
      name: 'lowImpact',
      type: 'group',
      label: '',
      admin: {
        condition: (_, { type }) => type === 'lowImpact',
      },
      fields: [
        LowImpactHero,
      ]
    },
    // Add more hero type groups here as needed
  ],
};

export default Hero;
