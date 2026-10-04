# Claims ledger: "Move 37 and the chain of thought"

Every fact spoken or shown, with its source. Short quotes are under fifteen words and attributed.

## Seoul, game 2
- Google DeepMind Challenge Match, Seoul. Game 2 played 10 March 2016. AlphaGo played Black, Lee Sedol (9 dan) White. Source: shared/facts.md, citing Wikipedia "AlphaGo versus Lee Sedol" and DeepMind.
- Move 37 is Black at P10, a shoulder hit on the fifth line, next to White's move 36 at Q11. Source: the attached game record, shared/alphago-lee-sedol-game2.sgf (Go Game Guru via the Internet Archive), as decoded in shared/facts.md. The stones on screen are moves 1 to 37 of that record.
- Commentators first thought the move was a mistake. Source: Wired, 10 March 2016, via Wikipedia, as cited in shared/facts.md. The film says "commentators call it a mistake" and does not quote Michael Redmond.

## Question 1
- AlphaGo pairs a policy network, which proposes moves, with a value network, which predicts the winner, and Monte Carlo tree search. Source: Silver et al., "Mastering the game of Go with deep neural networks and tree search", Nature 529, 484-489 (2016), via shared/facts.md.
- Move 37 "had a 1 in 10,000 chance of being used": the policy network's estimate that a human would play it. Source: https://deepmind.google/research/alphago, via shared/facts.md. No other move probability is shown.
- The branching diagram rising from the board is labelled "illustration, not a record". It is not AlphaGo's search.

## How a model writes, and question 2
- A language model produces text one token at a time, each token one forward pass over everything written so far. A chain of thought is that process continued: it can write "wait" and change course, and be sampled many times and voted on, but nothing forces each step to be checked. Source: shared/facts.md, "How an LLM writes".
- The streaming text is an excerpt, verbatim, from a real run of gpt-oss-120b on this machine, labelled "gpt-oss-120b, run locally". Question asked: whether 41 degrees south, 73 degrees west is land or water. The reasoning walks Chile's coast, writes "Wait, the Pacific is west of Chile.", estimates the coast near 41 south at about 72 west, and answers "Water". Source: shared/reasoning_traces.json, id "coord"; runtime llama-cpp-python 0.3.35, CPU, temperature 0.
- Ground truth: the point is land, in southern Chile near Puerto Montt. Source: Natural Earth 1:10m land, the answer key used in github.com/FavioVazquez/land-or-water, via shared/facts.md. The film shows "It answers Water. The point is land."

## 36 plus 59, and question 3
- Asked 36 plus 59, Claude 3.5 Haiku computes along parallel paths inside the network: one roughly estimates the size of the sum, one gets the last digit exactly. Asked how it did it, it describes the schoolbook method: add 6 and 9, carry the 1, add the tens. Source: Anthropic, "On the Biology of a Large Language Model" (March 2025), https://transformer-circuits.pub/2025/attribution-graphs/biology.html, via shared/facts.md. The diagram is original and labelled "after Anthropic, 2025".
- Models were given a hint to the answer; when they used it, Claude 3.7 Sonnet's reasoning mentioned the hint 25 percent of the time on average. Source: Chen et al. (Anthropic), "Reasoning Models Don't Always Say What They Think", arXiv:2505.05410 (May 2025), via shared/facts.md. DeepSeek R1's 39 percent is not shown.

## The two sides, and question 4
- Thore Graepel's argument, paraphrased: AlphaGo paired fast intuition with explicit search; a language model's written chain of thought is often produced after the fact, and keeps no inspectable record. Source: MIT Technology Review, "Don't be fooled: LLMs don't reason", 2 October 2026, https://www.technologyreview.com/2026/10/02/1145639/dont-be-fooled-llms-dont-reason/, via shared/facts.md.
- Yann LeCun, quoted: "True reasoning must involve a search." Source: his reply on X, 2 October 2026, via shared/facts.md.
- David Duvenaud's reply, paraphrased: every flaw listed also applies to humans. Graepel's answer, paraphrased: a person alone reasons poorly; with pencil and paper, better; holding to the scientific method, very well. Duvenaud: then we might give models the same tools. Source: the same exchange, via shared/facts.md. No other X user is named or shown.
- The film takes no side and ends on the open question: do the models get the tools?

## Not used
- arXiv:2608.09867, cited by the Technology Review piece, is about stealing encrypted reasoning traces, not faithfulness. Left out, as shared/facts.md instructs.
- The "add" and "bat" traces in shared/reasoning_traces.json are real and reach the right answers. Not shown.
