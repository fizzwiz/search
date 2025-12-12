import { Search } from './src/main/core/Search.js';
import { ArrayQueue } from '@fizzwiz/sorted';
import { Path } from '@fizzwiz/fluent';

const n = 2;
const items = ['A', 'B', 'C'];

const search = new Search()
  .from(new Path())
  .through(path => path.across(items))               
  .via(new ArrayQueue())
  .when(path => path.length > n, false)  // stops the infinite iteration
  .which(path => path.length === n);   

for (const seq of search) {
  console.log(seq.toArray());
}
