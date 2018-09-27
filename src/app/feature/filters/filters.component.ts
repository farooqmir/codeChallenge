import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FILTERS} from '../shared/filters';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

/**
 * @export
 * @class FiltersComponent
 * @implements {OnInit}
 */
export class FiltersComponent implements OnInit {

  /**
   * @memberof FiltersComponent
   * Triggers On Filter Change and on publish filter change events
   */
  @Output() onFilterChange = new EventEmitter();
  @Output() onFilterPublishChange = new EventEmitter();

  /**
   *filters: Filter object used for rendering advanced filters
   */
  filters = FILTERS;

  /**
   * @type {Boolean}
   * @memberof FiltersComponent
   * @Desc Default for publish filter
   */
  isPublished: Boolean = true;
  constructor() { }

  //TODO: Future implementation for advanced filters
  save(category, filter){
    console.log(this.filters);
  }

  /**
   * @param {*} isPublished_
   * @memberof FiltersComponent
   * Called when a publish filter changes
   */
  filterPublished(isPublished_) {
    this.onFilterPublishChange.emit({'params': {isPublished: isPublished_, cart: {}}});
  }

  /**
   * @param {*} category
   * @param {*} filter
   * @param {*} filters_
   * @param {*} categories
   * @memberof FiltersComponent
   * @Desc: Used for "OR" type advanced filter
   */
  selectOr(category, filter, filters_, categories){

    if(typeof category.selectCount == 'undefined')
     category.selectCount=0;

    category.selectedValue=filter.value;
    filter.isSelected = true;
    category.selectCount=1;

    category.filters.map(function(filter){
      filter.isSelected = false;
      return filter;
    });
    filter.isSelected = true;

    this.onFilterChange.emit({'category':category, 'filter':filter,'filters':filters_,'categories':categories});
  }


  /**
   * @param {*} category
   * @param {*} filter
   * @param {*} filters_
   * @param {*} categories
   * @memberof FiltersComponent
   * @Desc: Used for "AND" type advanced filter
   */
  selectAnd(category, filter, filters_, categories){
    filter.isSelected = !filter.isSelected;

    if(typeof category.selectCount == 'undefined')
     category.selectCount=0;

    if(!category.selectedValue)
     category.selectedValue='';

    if(filter.isSelected){
      category.selectedValue = category.selectedValue+""+((category.selectedValue)?(","+filter.value):filter.value);
      category.selectCount++;
    }
    else  {
      var remItem = (category.selectCount)>1?(","+filter.value):filter.value;
      category.selectedValue = category.selectedValue.replace(remItem,"");
      category.selectCount--;
    }

    this.onFilterChange.emit({'category':category, 'filter':filter,'filters':filters_,'categories':categories});
  }

  /**
   * @memberof FiltersComponent
   * Desc: OnInit abstract
   */
  ngOnInit() {
  }

}
