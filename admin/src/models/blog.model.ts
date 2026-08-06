import { Schema, models, model, type InferSchemaType } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    published: {
      type: Boolean,
      default: false,
      index: true,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export type BlogDocument = InferSchemaType<typeof blogSchema> & {
  _id: Schema.Types.ObjectId;
};

export const BlogModel = models.Blog || model("Blog", blogSchema);
