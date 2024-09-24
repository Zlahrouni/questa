import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  searchValue = new FormControl('');
  @Output() searchResult = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchResult.emit(this.searchValue.value);
  }

}
