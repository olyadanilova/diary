import {OPTIONS_DATA} from "../Constants";
/**
 * Форматирование даты
 */
export const dateFormatter = (value: Date) => {
    return new Date(value).toLocaleString("ru", OPTIONS_DATA)
};
// /**
//  * Сортировка объектов по свойству name
//  */
// export const sortByName = (param: any) => (obj1: any, obj2: any) => {
//     if (obj1[param].date < obj2[param].date) return -1;
//     if (obj1[param].date > obj2[param].date) return 1;
//     return 0;
// };
// export const sortByDate = (param: any)=>( a:TypeDiary,b: TypeDiary)=> {
//     let dateA:Date = new Date(a.date);
//     let dateB:Date = new Date(b.date);
//     return  console.log("sort_datedateA", dateA-dateB);
// });// export const dateformat = (date: Date) => {
// if (date){
//     let year = new Date(date).getFullYear();
//     let month = new Date(date).getMonth()+1;
//     let day = new Date(date).getDate();
//     return day + "." + month + "." + year;
// } else{
//     let year = new Date().getFullYear();
//     let month = new Date().getMonth()+1;
//     let day = new Date().getDate();
//     return year + "." + month + "." + day;
// }
// console.log("year",  day + "." + month + "." + year);
// };