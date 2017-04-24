(function(){

function QuickSort(items){
    var oThis = this;
    oThis.elements = items;

    oThis.sort = function(){
        quick_sort(0, oThis.elements.length - 1);
        return oThis.elements;
    }

    function quick_sort(left, right){
        if(left == right) return;

        var i = left;
        var j = right;

        var pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
        var pivot = oThis.elements[pivotIndex];

        while(i < j){
            while(oThis.elements[i] < pivot){
                i++;
            }
            while(oThis.elements[j] > pivot){
                j--;
            }
            if(i <= j){
                var temp = oThis.elements[i];
                oThis.elements[i] = oThis.elements[j];
                oThis.elements[j] = temp;
                i++;
                j--;
            }
        }

        if(left < j){
            quick_sort(left, j);
        }
        if(right > i){
            quick_sort(i, right);
        }
    }
}

var itemsToSort = [2, 10, 5, 1, 8, 4, 9, 3, 7, 6];
var quickSortObj = new QuickSort(itemsToSort);
console.log("Quick Sort Algorithm");
console.log("Before: \n" + itemsToSort);
quickSortObj.sort();
console.log("After: \n" + itemsToSort);

})();