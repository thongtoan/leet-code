let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let nums = [];
let m = 3;
let n = 3;

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >=0) {
         if (nums1[i] < nums2[j]) {
             nums1[k] = nums2[j];
             j--;
             k--;
         } else if (nums1[i] > nums2[j]) {
             nums1[k] = nums1[i];
             i--;
             k--;
         } else {
             nums1[k] = nums2[j];
             k--;
         }
    }
    while (j >= 0) {
         nums1[k] = nums2[j];
         j--;
         k--;
    }
    return nums1;
};

console.log(merge(nums1, m, nums2, n));