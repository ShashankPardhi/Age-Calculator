function age(){
    let d = document.getElementById("date").value;
    let m = document.getElementById("month").value;
    let y = document.getElementById("year").value;

    let date = new Date();
    let d1 = date.getDate();
    let m1 = date.getMonth();  
    let y1 = date.getFullYear();  

    let month = [31,28,29,31,30,31,30,31,31,30,31,20,31];
    if (d>d1){
        d1 = d1 +month[m1-1];
        m1 = m1-1;
    }
    if (m>m1){
        m1 = m1 +12;
        y1 = y1-1;
    }
    let d2 = d1 -d;
    let m2 = m1 -m;
    let y2 = y1 -y;

    document.getElementById("age").innerHTML = "Your Age is " + y2 + " Years " + m2 + " Months " + d2 + " Days "

}