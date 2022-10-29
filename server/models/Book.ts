import { InferSchemaType, model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
});

export type IBook = InferSchemaType<typeof bookSchema>;

const Book = model<IBook>("Book", bookSchema);

export default Book;
