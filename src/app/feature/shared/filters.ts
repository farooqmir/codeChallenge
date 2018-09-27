import { Filter } from './Filter';

/**
 * @export
 * @class FILTERS
 * @Desc: Advanced Filters
 */
export const FILTERS: Filter[] = [
  { name: 'OS', value: '', type: 'OS', operation:'OR',filters:[
    { name: 'Android', value: 'Android', type: '', operation:'',filters:null},
    { name: 'IOS', value: 'IOS',type: '', operation:'',filters:null},
    { name: 'Others', value: 'Others',type: '', operation:'',filters:null}
  ]},
  { name: 'color', value: '', type: 'color', operation:'AND',filters:[
    { name: 'Red', value: 'Red', type: '', operation:'',filters:null},
    { name: 'Green', value: 'Green', type: '', operation:'',filters:null},
    { name: 'Blue', value: 'Blue', type: '', operation:'',filters:null}
  ]},
  { name: 'brand', value: '', type: 'brand', operation:'AND',filters:[
    { name: 'Samsung', value: 'Samsung', type: '', operation:'',filters:null},
    { name: 'IPhone', value: 'IPhone', type: '', operation:'',filters:null}
  ]}

]
