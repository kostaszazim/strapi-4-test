import type { Attribute, Schema } from '@strapi/strapi';

export interface DestinationsChildren extends Schema.Component {
  collectionName: 'components_destinations_children';
  info: {
    description: '';
    displayName: 'children';
  };
  attributes: {
    children: Attribute.Relation<
      'destinations.children',
      'oneToMany',
      'api::destination.destination'
    >;
    children_section_heading: Attribute.String;
    custom_children_map_image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'destinations.children': DestinationsChildren;
    }
  }
}
