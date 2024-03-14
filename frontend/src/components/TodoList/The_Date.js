export default function The_date(){
    var date1 = new Date();
    var day = date1.getDate();
    var month = date1.getMonth();
    var year = date1.getFullYear();
    var fullDate = day + "-" +(month + 1) + "-" + year;
    return fullDate
}