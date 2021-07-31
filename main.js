var students=[];
function submit()
{
    var name=document.getElementById("name1").value;
    students.push(name);
    document.getElementById("display_name").innerHTML=students;
}
function show()
{
    var i=students.join("<br>");
    document.getElementById("p1").innerHTML=i;
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    students.sort();
    var i=students.join("<br>");
    document.getElementById("sorted_name").innerHTML=i;
}
   