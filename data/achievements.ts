import type { Achievement, Stat } from "@/types";

/** Scoreboard figures. 250+ LeetCode is a subset of the 350+ total. */
export const stats: Stat[] = [
  { value: "8.94", label: "CGPA", note: "B.E. IT · PICT" },
  { value: "350+", label: "DSA problems", note: "LeetCode · HackerRank · Codeforces" },
  { value: "250+", label: "On LeetCode", note: "Part of the 350+ total" },
  { value: "W", label: "HackSprint v6.0", note: "ISTE Students' Chapter, MMCOE", kind: "result" },
];

export const achievements: Achievement[] = [
  {
    title: "Winner — HackSprint v6.0",
    detail: "Hosted by the ISTE Students' Chapter, MMCOE.",
  },
  {
    title: "350+ DSA problems solved",
    detail: "Across LeetCode, HackerRank and Codeforces, including 250+ on LeetCode (dhruvkatheria).",
  },
];
