import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Movie {
  @Prop()
  category: string[];

  @Prop()
  name: string;

  @Prop()
  years: number;

  @Prop()
  public poster: string;

  @Prop()
  director: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
export type MovieDocument = Movie & Document;
