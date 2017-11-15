public static int partition(int[] array, int lo, int hi) {  
            // 固定的切分方式  
            int key = array[lo];  
            while (lo < hi) {  
                while (array[hi] >= key && hi > lo) {// 从后半部分向前扫描  
                        hi--;  
                }  
                array[lo] = array[hi];  
                while (array[lo] <= key && hi > lo) {// 从前半部分向后扫描  
                    lo++;  
                }  
                array[hi] = array[lo];  
            }  
            array[hi] = key;  
            return hi;  
        }  
  
        public static int[] sort(int[] array, int lo, int hi) {  
            if (lo >= hi) {  
                return array;  
            }  
            int index = partition(array, lo, hi);  
            sort(array, lo, index - 1);  
            sort(array, index + 1, hi);  
            return array;  
        }  
