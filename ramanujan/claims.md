# Claims ledger: "Ramanujan's hidden step" (ramanujan-socratic-1920x1080.mp4)

Every spoken (V) and on-screen (S) fact in the video, with where it comes from. Times are approximate
(see socratic.json and the chapters for exact beat times).

## Sources

- [JIMS-1911] S. Ramanujan, Question 289, *Journal of the Indian Mathematical Society* 3(2), 1911, p. 90.
- [JIMS-1912] Solution by the proposer (Ramanujan), *J. Indian Math. Soc.* 4(6), 1912, p. 226.
- [CP-1927] *Collected Papers of Srinivasa Ramanujan*, Cambridge University Press, 1927: Question 289
  reprinted on p. 323; the note on p. 348 says the solution is incomplete and supplies a convergence
  argument, crediting T. Vijayaraghavan.
- [H-1935] A. Herschfeld, "On infinite radicals", *American Mathematical Monthly* 42 (1935): notes the
  solution is incomplete and gives rigorous convergence results.
- [JONES] D. J. Jones, "A chronology of continued square roots and other continued compositions, through
  the year 2016", arXiv:1707.06139 (v5, 2025), entries 75 (Ramanujan, 1911/1912; Collected Papers p. 348)
  and 90 (Herschfeld, 1935). https://arxiv.org/abs/1707.06139
- [CALC] Computed for this video (beats.py / scenes.js `tval`): T(k) = sqrt(1 + 2 sqrt(1 + 3 sqrt(1 + ... + k sqrt(1)))).
- [ALG] Elementary algebra, checked here: (n + 1)^2 = n^2 + 2n + 1 = 1 + n(n + 2).

## Claims

| # | Where | Claim | Source |
|---|---|---|---|
| 1 | V 0:00, S 0:00 | In 1911 Ramanujan sent this puzzle to the Journal of the Indian Mathematical Society | JIMS-1911, JONES 75 |
| 2 | S 0:00 | "Question 289", "Journal of the Indian Mathematical Society, 1911", "proposed by S. Ramanujan" | JIMS-1911, JONES 75 |
| 3 | S 0:00 | The expression sqrt(1 + 2 sqrt(1 + 3 sqrt(1 + 4 sqrt(1 + ...)))) | JIMS-1911 |
| 4 | V/S Q1 reveal | It equals 3 | JIMS-1912, CP-1927, H-1935 (proved rigorously later) |
| 5 | V a1 | "The puzzle gave no reason" (Question 289 was posed without a derivation) | JIMS-1911 (a question; the solution came in JIMS-1912) |
| 6 | V/S | 3 = sqrt(9); 9 = 1 + 2 x 4, so 3 = sqrt(1 + 2 x 4) | arithmetic |
| 7 | V/S | 4 = sqrt(16); 16 = 1 + 3 x 5, so 4 = sqrt(1 + 3 x 5) | arithmetic |
| 8 | V/S | 5 = sqrt(1 + 4 x 6), and the nest unfolds this way forever into the original puzzle | arithmetic, ALG |
| 9 | V/S | The identity n + 1 = sqrt(1 + n(n + 2)) for every n = 1, 2, 3, ... | ALG |
| 10 | V/S Q4 | The pattern alone is not a proof: unrolling never checks that the infinite nest settles on a value | CP-1927 p. 348, H-1935, JONES 75/90 (solution noted incomplete; convergence supplied) |
| 11 | S | T(4) = sqrt(1 + 2 sqrt(1 + 3 sqrt(1 + 4 sqrt(1)))) ~ 2.560 | CALC |
| 12 | S plot | T(k), k = 1..15: 1, 1.732, 2.236, 2.560, 2.755, 2.867, 2.929, 2.963, 2.981, 2.990, 2.995, 2.997, 2.999, 2.999, then T(15) ~ 2.99964 (readout shows each value as its point lands; dashed line y = 3) | CALC |
| 13 | V | "the values climb toward three" | CALC (numerical; the proof of convergence is in CP-1927 / H-1935) |
| 14 | V/S close | His own solution was published in 1912 ("vol. 4, p. 226") | JIMS-1912, JONES 75 |
| 15 | V/S close | That solution was incomplete | CP-1927 p. 348, H-1935, JONES 75 |
| 16 | S close | 1927: Collected Papers, note crediting T. Vijayaraghavan | CP-1927 p. 348, JONES 75 |
| 17 | S close | 1935: A. Herschfeld, Amer. Math. Monthly, convergence proof | H-1935, JONES 90 |
| 18 | V | "The convergence proofs came later" | CP-1927, H-1935 |
| 19 | V/S | "Even his shown work hid a step" (editorial line: the 1912 solution omitted convergence) | follows from 15 |
| 20 | S end | "Made by Claude Opus 5.5 with showtime"; github.com/FavioVazquez/socratic-showtime | production credit |

Deliberately not claimed: how long the puzzle went unanswered, or that nobody solved it.

## Quiz feedback lines (socratic.json)

Arithmetic only: 1 + 2 x 5 = 11, 1 + 2 x 8 = 17, 1 + 3 x 4 = 13, 1 + 3 x 6 = 19; the Q4 lines restate claim 10.

## Production

Voice: Kokoro `af_heart` (synthetic, local, no API). Music and sounds: procedural (showtime Synth), made for
this video. Fonts: KaTeX_Main / KaTeX_Math (vendored KaTeX 0.18.9, SIL OFL), Inter (SIL OFL). Surd outline:
KaTeX's Size1 radical path (MIT).
