// Tạo một array mới để chứa kết quả
// Dùng vòng lặp kép, lấy từng phần tử của nums1 so sánh với phần tử nums2 theo 3 trường hợp 

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let nums = [];
let m = 3;
let n = 3;

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n); 
    let i = 0;
    let j = 0;
    while (i < nums1.length) {
        while (j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                nums.push(nums1[i]);
                i++;
            } else if (nums1[i] === nums2[j]) {
                nums.push(nums1[i], nums2[j]);
                i++, j++;
            } else {
                nums.push(nums2[j]);
                j++;
            }
        };
    };
    if (i === nums1.length || j === nums2.length) {
        nums.push()
    }
    return nums;
};

console.log(merge(nums1, m, nums2, n));
