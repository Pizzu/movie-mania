import { type EntryFieldTypes } from "contentful";

export interface ContentfulWebhookPayload {
  metadata: {
    tags: unknown[]; // Update with appropriate type if available
  };
  sys: {
    type: string;
    id: string;
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    createdBy: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    updatedBy: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    revision: number;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    [key: string]: {
      [locale: string]: unknown; // Update with appropriate type if available
    };
  };
}

export type MovieContentfulSkeleton = {
  contentTypeId: "movie";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    plot: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    director: EntryFieldTypes.Text;
    duration: EntryFieldTypes.Number;
    mainImage: EntryFieldTypes.AssetLink;
    releaseDate: EntryFieldTypes.Date;
  };
};
