// ==UserScript==
// @name          	LeetCode Hide
// @description     Hides locked or finished problems on LeetCode
//
// @author			    Man Yiu
// @namespace       http://github.com/manyiu
// @downloadURL		  https://raw.githubusercontent.com/manyiu/leetcode-hide/main/index.js
//
// @match			      https://leetcode.com/problemset/*
//
// @version         1.0
// @updateURL		    https://raw.githubusercontent.com/manyiu/leetcode-hide/main/index.js
//
// @run-at			    document-end
// @unwrap
// ==/UserScript==

const hideProblems = () => {
  const tables = document.querySelectorAll(".question-list-table .table");

  for (const table of tables) {
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
  }
};

if (document.readyState != "loading") {
  hideProblems();
} else {
  document.addEventListener("DOMContentLoaded", hideProblems);
}
