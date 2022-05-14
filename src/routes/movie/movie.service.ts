import { Injectable } from "@nestjs/common";
import { MovieDocument, Movie } from "../../schemas/movie.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {
  }

  /**
   * 获取电影列表
   */
  async getMovies(): Promise<Movie[]> {
    return this.movieModel.find();
  }

  /**
   * 获取电影详情
   * @param id
   */
  async getMovieInfo(id: string): Promise<Movie> {
    return this.movieModel.findById(id);
  }

  /**
   * 创建
   */
  async createMovie(): Promise<Movie> {
    return this.movieModel.create({
      category: ["喜剧", "现代", "偶像"],
      name: "三傻大闹宝莱坞",
      year: 1990,
      poster: "test",
      director: "test",
      comments: ["hhhhhh"],
    });
  }
}
