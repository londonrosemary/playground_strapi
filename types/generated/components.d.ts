import type { Schema, Attribute } from '@strapi/strapi';

export interface IdentifierPerson extends Schema.Component {
  collectionName: 'components_identifier_people';
  info: {
    displayName: 'person';
    icon: 'user';
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'identifier.person': IdentifierPerson;
    }
  }
}
