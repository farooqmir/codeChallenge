import { Injectable } from '@angular/core';
/**
 * @export
 * @class FilteringService
 * Desc: Filter service is used for all the filter operation.
 * Usage:
 *   Publish filter: applies filters based on IsPublish flag
 *   Advanced Filter: applies advanced filters like color, Operating system
 *     [TODO:]: Enhancements to be implemented
 */
@Injectable({
  providedIn: 'root',
})


export class FilteringService {

  constructor() { }

  /**
   * @param {*} products
   * @param {*} filters
   * @param {*} categories
   * @returns
   * @memberof FilteringService
   * Applies advanced filters
   */
  applyAdvancedFilter(products,filters,categories){
    var include=false,index;
    var filtered = products.filter(function(product){
      var cIndex=0;
      for(;cIndex<categories.length;cIndex++){
        var category = categories[cIndex];
      //categories.some(function(category, index)
          include=false;index=0;
          var fIndex=0;
          for(;fIndex<category.filters.length;fIndex++){
                var filter_ = category.filters[fIndex];
                if(filter_.isSelected){
                   if((category.operation=="AND" && product[category.type] != filter_.value) || (category.operation=="OR" &&  product[category.type] == filter_.value))
                   {
                      break;
                   }
                }
          };
          if(category.operation=="AND")
            include = (typeof category.selectCount=='undefined' || category.selectCount<=0) || (category.selectCount>0 && fIndex==category.filters.length);
          else if(category.operation=="OR")
            include = (typeof category.selectCount=='undefined' || category.selectCount<=0) || (category.selectCount>0 && fIndex!=category.filters.length);

          if(!include)
           break;
        };

        return include;
    });

    console.log(filtered);
    return filtered;
  }

  /**
   * @param {*} products
   * @param {*} filter
   * @param {*} cart
   * @returns
   * @memberof FilteringService
   * Applies IsPublish filter along based on Cart information
   */
  applyFilter(products, filter, cart) {
    var include=false, index, includeCart=true;
    var filtered = products.filter(function(product){
      if(cart && cart.indexOf(product.id)>=0)
       return false;
      else if(filter.isPublished=='ALL' || filter.isPublished == product.isPublished)
         return true;
      else
         return false;
    });
    return filtered;
  }
}
