student_names_array=[];
function submit()
{
    var display_student_array=[];
    for(var k=1; k<=4; k++)
    {
        var name_of_students=document.getElementById("student_names"+k).value;
        console.log(name_of_students);
        student_names_array.push(name_of_students);
    }
    console.log(student_names_array);
    var length_of_student_names_array=student_names_array.length;
    console.log(length_of_student_names_array);

    for(var j=0; j<length_of_student_names_array; j++);
    {
        display_student_array.push("<h4> "Name - "+ student_names_array[j]</h4>");
        console.log( display_student_array);
    }
    console.log( display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

    function sort()
    {
        student_names_array.sort();
        console.log(student_names_array);
        var display_student_array_sorting=[];
        var length_of_student_names_array=student_names_array.length;
        console.log(length_of_student_names_array);

        for(var j=0; j<length_of_student_names_array; j++);
    {
        display_student_array_sorting.push("<h4> "Name - "+ student_names_array[j]</h4>");
        console.log( display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }