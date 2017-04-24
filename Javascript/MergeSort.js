(function(){

function MergeSort(items){
    var oThis = this;
    oThis.elements = items;

    oThis.sort = function(){
        merge_sort(0, oThis.elements.length - 1);
        return oThis.elements;
    };

    function merge_sort(low, high){
        if(low < high){
            var mid = Math.floor((low + high) / 2); // Note: Using Math.ceil causes stack overflow exception as mid never reaches zero.
            merge_sort(low, mid);
            merge_sort(mid + 1, high);
            merge(low, mid, high);
        }
    }

    function merge(low, mid, high){
        var arr = [];
        var i = low;
        var j = mid + 1;

        while(i <= mid && j <= high){
            if(oThis.elements[i] <= oThis.elements[j]){
                arr.push(oThis.elements[i]);
                i++;
            }
            else{
                arr.push(oThis.elements[j]);
                j++;
            }
        }

        while(i <= mid){
            arr.push(oThis.elements[i]);
            i++;
        }

        while(j <= high){
            arr.push(oThis.elements[j]);
            j++;
        }

        for (var index = 0; index < arr.length; index++) {
            oThis.elements[low + index] = arr[index];
        }

    }
}

var itemsToSort = [2, 10, 5, 1, 8, 4, 9, 3, 7, 6];
var mergeSortObj = new MergeSort(itemsToSort);
console.log("Merge Sort Algorithm");
console.log("Before: \n" + itemsToSort);
mergeSortObj.sort();
console.log("After: \n" + itemsToSort);
})();