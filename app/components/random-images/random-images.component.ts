import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-images',
  templateUrl: './random-images.component.html',
  styleUrls: ['./random-images.component.scss']
})
export class RandomImagesComponent implements OnInit {
  // imageSrc1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDq7CjvBujflsboJtHf4YGfYc9r6iErrjejg&usqp=CAU";
  // imageSrc2="https://1.bp.blogspot.com/-SRVkI1Ibeh8/Xo2_-r3tdsI/AAAAAAAAZpw/lI5sluoo5HUvlS3TBjIx78yrf7aT6RRTgCLcBGAsYHQ/s1600/Pushpa-Telugu-Movie-Budget-Hit-or-Flop-Box-Office-Collection-Day-Wise.jpg"
  // imageSrc3="https://2.bp.blogspot.com/-v1sZO3FEq3Q/XHacWTt-i4I/AAAAAAAAYIQ/tn45wEqluBQjqQQn3sQgio40niSOaAS7QCLcBGAs/s1600/major-upcoming-movie-poster-star-cast-release-date-mt-wiki.jpg"
  constructor() { }
 
   imageList = [
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDq7CjvBujflsboJtHf4YGfYc9r6iErrjejg&usqp=CAU" },
    {img:"https://1.bp.blogspot.com/-SRVkI1Ibeh8/Xo2_-r3tdsI/AAAAAAAAZpw/lI5sluoo5HUvlS3TBjIx78yrf7aT6RRTgCLcBGAsYHQ/s1600/Pushpa-Telugu-Movie-Budget-Hit-or-Flop-Box-Office-Collection-Day-Wise.jpg" },
    {img:"https://2.bp.blogspot.com/-v1sZO3FEq3Q/XHacWTt-i4I/AAAAAAAAYIQ/tn45wEqluBQjqQQn3sQgio40niSOaAS7QCLcBGAs/s1600/major-upcoming-movie-poster-star-cast-release-date-mt-wiki.jpg" },
    
  ];
  ngOnInit(): void {
  }

}
