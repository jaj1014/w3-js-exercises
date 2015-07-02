// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

//assumed array = [["David", 80],["Vinoth", 77], ["Divya", 88], ["Ishitha", 95],["Thomas", 68]]

function grade(arr) {
	for(var i = 0, studentMark = ""; i < arr.length; i++) {
		if(arr[i][1] < 60) {
			studentMark += arr[i][0] + "'s mark is an F\n";
		} else if(arr[i][1] < 70) {
			studentMark += arr[i][0] + "'s mark is an D\n";
		} else if(arr[i][1] < 80) {
			studentMark += arr[i][0] + "'s mark is an C\n";
		} else if(arr[i][1] < 90) {
			studentMark += arr[i][0] + "'s mark is an B\n";
		} else if(arr[i][1] <= 100) {
			studentMark += arr[i][0] + "'s mark is an A\n";
		}
	}
	console.log(studentMark);
}
