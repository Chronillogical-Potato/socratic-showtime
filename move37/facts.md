# Fact sheet: "Move 37 and the chain of thought" (verified 2026-10-04)

Every fact you put on screen or in the narration must come from this sheet, or from a source you add to your
claims.md with a link. Short quotes only (under 15 words), always attributed. Do not invent numbers.

## The debate that prompted this video
- 2026-10-02, MIT Technology Review: "Don't be fooled: LLMs don't reason" by Thore Graepel (UCL; co-author of the
  2016 AlphaGo paper in Nature; left Google DeepMind in 2026). https://www.technologyreview.com/2026/10/02/1145639/dont-be-fooled-llms-dont-reason/
  His argument (paraphrase): AlphaGo paired fast intuition (a policy network) with explicit search; LLMs have the
  intuition but (1) keep no explicit, inspectable record of hypotheses, confidence and evidence, (2) mix knowledge and
  reasoning in the same weights, and (3) their written chains of thought are often produced after the fact.
  His tweet (x.com/ThoreG/status/2105988456824386034), quotable: "generating longer chains of thought is not the same as genuine reasoning."
- Replies on X (2026-10-02):
  - Yann LeCun: "True reasoning must involve a search."
  - David Duvenaud (paraphrase): every flaw listed also applies to humans: no inspectable state, explanations made up afterwards.
  - Graepel's answer (paraphrase): a person alone reasons poorly; with pencil and paper, better; holding themselves to the scientific method, very well.
  - Duvenaud (paraphrase): then we might give LLMs the same tools.
  Do not name or show any other X users. Present both sides fairly; the video takes no side.

## AlphaGo, game 2, Move 37 (all verified)
- Google DeepMind Challenge Match, Seoul. Game 2 played 10 March 2016. AlphaGo played Black; Lee Sedol (9p) White.
  AlphaGo won game 2 (Lee resigned after 211 moves) and the match 4-1. (Wikipedia "AlphaGo versus Lee Sedol"; DeepMind)
- Move 37: Black at P10, a shoulder hit on the fifth line, next to White's move 36 at Q11. (game record, attached)
- DeepMind: Move 37 "had a 1 in 10,000 chance of being used" (the policy network's estimate that a human would play it).
  https://deepmind.google/research/alphago/
- Commentators first thought it was a mistake; Michael Redmond (9p) called it "creative" and "unique"; Lee took an
  unusually long time to respond. (Wired, 10 Mar 2016, via Wikipedia)
- AlphaGo = policy network (proposes moves) + value network (predicts the winner) + Monte Carlo tree search.
  Silver et al., "Mastering the game of Go with deep neural networks and tree search", Nature 529, 484-489 (2016).
- The full game record is attached: shared/alphago-lee-sedol-game2.sgf (Go Game Guru via the Internet Archive).
  Moves 1-37 in SGF coordinates (column letter a-s left to right, row letter a-s top to bottom; Go notation skips I):
  B pd, W dp, B cd, W qp, B op, W oq, B nq, W pq, B cn, W fq, B mp, W qn, B ic, W dj, B po, W qo, B cp, W cq, B bq,
  W co, B bp, W bo, B do, W bn, B dq, W ep, B dr, W cm, B jp, W cg, B ed, W qf, B qe, W pf, B nd, W pi(=Q11), B oj(=P10, move 37).
  Use the real position. You may NOT show any AlphaGo move probabilities except the single published 1-in-10,000
  figure. A search tree or heatmap must be labelled "illustration".

## Are written chains of thought the real reasoning?
- Anthropic, "On the Biology of a Large Language Model" (Mar 2025, Claude 3.5 Haiku):
  https://transformer-circuits.pub/2025/attribution-graphs/biology.html  Asked 36 + 59, the model computes along
  parallel paths inside the network (one roughly estimates the size of the sum, one gets the last digit exactly),
  but when asked how it did it, it describes the schoolbook method: add 6 + 9, carry the 1, add the tens.
  Recreate this as your own diagram, labelled "after Anthropic (2025)". Do not copy their figure.
- Chen et al. (Anthropic), "Reasoning Models Don't Always Say What They Think", arXiv:2505.05410 (May 2025):
  models were given a hint to the answer; when they used it, Claude 3.7 Sonnet's reasoning mentioned the hint
  25% of the time on average, DeepSeek R1's 39%.
- Note (do not put in the video): one of the two papers the Tech Review piece cites for "chains of thought made up
  after the fact" (arXiv:2608.09867) is about stealing encrypted reasoning traces, not faithfulness. Leave it out.

## Real reasoning text you may show
- shared/reasoning_traces.json (being generated now; wait for it if missing): real outputs of gpt-oss-120b run on this
  machine with llama.cpp (three questions: 36 + 59, a Land-or-Water coordinate, the bat-and-ball puzzle).
  If you show model reasoning text, use this verbatim (you may excerpt) and label it
  "gpt-oss-120b, run locally". Never write fake reasoning text and present it as a model's.

## How an LLM writes (general, uncontroversial)
- A language model produces text one token at a time; each token comes from one forward pass over everything
  written so far. A chain of thought is that same process continued for longer: it can write "wait, let me check"
  and change course in the text, and it can be sampled many times and voted on, but nothing in the model forces
  each step to be checked.

## Added 2026-10-04 00:25: the traces are ready, and one is a real example of plausible-but-wrong reasoning
- reasoning_traces.json, id "coord": gpt-oss-120b was asked whether 41° S, 73° W is land or water. Its reasoning
  walks through Chile's coast, writes "Wait, the Pacific is west of Chile.", estimates the coast near 41° S at about
  72° W, concludes the point is in the Pacific, and answers "Water".
- Ground truth: it is LAND (Natural Earth 1:10m land, the answer key used in github.com/FavioVazquez/land-or-water;
  the point is in southern Chile, near Puerto Montt). The chain of thought reads well and contains one wrong step.
- You may use this as the real example of a chain of thought (quote it verbatim, excerpted, labelled
  "gpt-oss-120b, run locally"), and show the truth next to it. It fits Q2 and the "nothing checks each step" point.
- The "add" and "bat" traces are also real; they reach the right answers.
