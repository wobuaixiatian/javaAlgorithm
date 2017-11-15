public static int[] selectionSort(int[] arr){  
    if (null == arr || arr.length == 0){  
        return null;  
    }  
  
    int length = arr.length;  
    for (int i = 0; i < length - 1; i++) {  
        int min = i;  
        for (int j = i + 1; j < length; j++) {  
            if (arr[j] < arr[min]){  
                min = j;  
            }  
        }  
        int temp = arr[i];  
        arr[i] = arr[min];  
        arr[min] = temp;  
    }  
    return arr;  
}  
