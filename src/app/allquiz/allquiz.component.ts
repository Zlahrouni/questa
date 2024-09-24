import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from './category.service';

@Component({
  selector: 'app-allquiz',
  templateUrl: './allquiz.component.html',
  styleUrls: ['./allquiz.component.scss']
})
export class AllquizComponent implements OnInit {
  allCatQuizz: any[] = this.categoryService.allCatQuizz;
  playerName = '';


  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(value=> {
      this.allCatQuizz = value;
      console.log(this.allCatQuizz);
    });



    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });


  }

  navigateToQuiz(IdCategory : number) {
    this.router.navigate(['/quiz', this.playerName, '/', IdCategory]);
  }


}
