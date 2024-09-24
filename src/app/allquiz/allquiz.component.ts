import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-allquiz',
  templateUrl: './allquiz.component.html',
  styleUrls: ['./allquiz.component.scss']
})
export class AllquizComponent implements OnInit, OnChanges {
  allCatQuizz!: any[];
  allQuizFiltered!: any[];
  @Input() playerName = '';
  @Input() filter = '';



  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(value=> {
      this.allCatQuizz = value;
      this.allQuizFiltered = this.allCatQuizz;
      console.log(this.allCatQuizz);
    });

    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });


  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter'] && this.allCatQuizz) {
      const filterValue = changes['filter'].currentValue.toLowerCase();
      console.log('filterValue', filterValue)
      console.log('this.allCatQuizz', this.allCatQuizz)
      if (filterValue === '') {
        this.allQuizFiltered = this.allCatQuizz;
        return;
      } else {
        this.allQuizFiltered = this.allCatQuizz.filter(cat => cat.categoryLabel && cat.categoryLabel.toLowerCase().includes(filterValue));
      }
    }
  }

  navigateToQuiz(idCategory : string) {
    if (!this.playerName) {
      console.error('playerName is undefined');
      return;
    }
    console.log('navigateToQuiz', idCategory)
    this.router.navigate(['/quiz', this.playerName, idCategory]);
  }


}
