alert(`مرحباً بك في موقعي الذي سيحسب درجتك!!`)
let grade = prompt(`اكتب درجتك بالأرقام`)
console.log(grade)
if(grade >=90 && grade <= 100 ){
    console.log(`لقد حصلت على امتياز 🥳`)
}else if(grade>= 80  && grade<= 89){
    console.log(` جيد جدا`)
}else if (grade>=70 && grade<=79 ){
    console.log (`جيد`)
}else if(grade>=60 && grade<=69){
    console.log(`لقد حصلت على مقبول`)
}else if(grade>=50 && grade<=59){
    console.log(`ضعيف`)
}else if(grade<50) console.log(`راسب`)
// تم التعديل