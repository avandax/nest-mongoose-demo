import { Controller, Get, Param, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "../../schemas/movie.schema";

@Controller("movies")
export class MovieController {
  constructor(private readonly service: MovieService) {
  }

  @Get()
  list() {
    return this.service.getMovies();
  }

  @Get(":id")
  info(@Param("id") id: string): Promise<Movie> {
    return this.service.getMovieInfo(id);
  }

  @Post()
  create(): Promise<Movie> {
    return this.service.createMovie();
  }
}
