import { PipeTransform, Pipe } from '@angular/core';
import { Expense } from '../_models/expense';

@Pipe({
name: "expenseFilter"
})
export class ExpenseFilterPipe implements PipeTransform{
transform(expenses: Expense[], searchTerm: string) : Expense[]{
if(!expenses || !searchTerm){
return expenses;
}

return expenses.filter(expenses =>
expenses.expenseType.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
// user.userId.toLowerCase().indexof(searchTerm.toLowerCase()) !== -1);
}
}