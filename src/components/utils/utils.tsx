import {OPTIONS_DATA} from "../Constants";
/**
 * Форматирование даты
 */
export const dateFormatter = (value: Date) => {
    return new Date(value).toLocaleString("ru", OPTIONS_DATA)
};

// export const dateformat = (date: Date) => {
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