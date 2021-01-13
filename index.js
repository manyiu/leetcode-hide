// ==UserScript==
// @name          	LeetCode Hide
// @description     Hides locked or finished problems on LeetCode
//
// @author			    Man Yiu
// @namespace       http://github.com/manyiu
// @downloadURL		  https://github.com/manyiu/leetcode-hide/raw/main/index.js
//
// @match			      https://leetcode.com/problemset/*
//
// @version         1.1.0
// @updateURL		    https://github.com/manyiu/leetcode-hide/raw/main/index.js
//
// @run-at			    document-end
// @unwrap
// ==/UserScript==

new Promise((resolve) => {
  const intervalID = setInterval(() => {
    const table = document.querySelector(".question-list-table .table");
    if (table) {
      clearInterval(intervalID);
      resolve(table);
    }
  }, 500);
}).then((table) => {
  const trs = table.querySelectorAll("tr");

  Problems: for (const tr of trs) {
    const locked = tr.querySelector(
      '[data-original-title="Subscribe to unlock"] .fa-lock'
    );

    if (locked) {
      tr.style.display = "none";
      continue Problems;
    }

    const finished = tr.querySelector(".text-success");

    if (finished) {
      tr.style.display = "none";
    }
  }
});
