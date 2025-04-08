// Good solution

let nums1 = [1, 2, 7, 0, 0, 0];
let nums2 = [2, 5, 6];
let nums = [];
let m = 3;
let n = 3;

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }    
    return nums1;
};

console.log(merge(nums1, m, nums2, n));