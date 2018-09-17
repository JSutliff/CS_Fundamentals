function inserstionSort(items) {
  //index into unsorted section, moving right
  var i;
  //index into sorted section, moving left
  var j;

  for (var i = 0; i < items.length; i ++) {

    //store the current value to insert later (this will be overwritten by the shift)
    var value = items[i];

    //starting at the element (items[i - 1]) before the current value (value, items[i]),
    //move left through the array (decrementing j) and shift each value to the right
    // (move to items[j + 1]) if it is larger than the current value. Stop when you reach 
    // a value which is less than or equal to the current value/

    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = value;
  }
  return items;
}