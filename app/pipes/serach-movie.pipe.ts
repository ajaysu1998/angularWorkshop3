import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'serachMovie'
})
export class SerachMoviePipe implements PipeTransform {

  transform(value: any[], movieName:string): any {
    if(!value) return null;
    if(!movieName) return value;
    let search = movieName.toLowerCase();
    return value.filter(movie=>{
      let nameOfMovie = movie.title.toLowerCase();
      return nameOfMovie.indexOf(search) !== -1
    })
   
  }

}
