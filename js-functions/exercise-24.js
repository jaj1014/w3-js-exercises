// 24. Write a JavaScript function to apply Bubble Sort algorithm.  
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
//is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
//comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

//I didn't write this one because the original version I had wasn't a true bubble sort
//after some research I found this code and just commented it out so I could understand 
//what was going on. This is an interesting pattern with the do/while setup.
//original code found [here](http://algorithms.openmymind.net/sort/bubblesort.html)

function bubbleSort(arr) {
  //do the following block of code - at least once
  do {
    //set var swapped to false
    var swapped = false;
    //loop through based on the length of the array
    for(var i = 0; i < arr.length - 1; i++) {
      //if the following is true (a value greater than the value next to it in the array)
      if (arr[i] > arr[i + 1]) {
        //swap the values place in the array
        //place one in temp to hold value
        var temp = arr[i];
        //move the second to the place of the first
        arr[i] = arr[i + 1];
        //make the second the value of the first by making it equal temp
        arr[i + 1] = temp;
        //set swapped to true so it'll run 'do' again (the while statement below)
        swapped = true;
      }
    }
  }
  //while swapped is true, continue to run the do code block
  while(swapped == true);

  //once do is no longer true it'll fall through to run this chunk
  console.log(arr);	
}
